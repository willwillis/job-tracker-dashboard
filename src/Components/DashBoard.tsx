import React from 'react';
import { useFindOneDashboardQuery } from 'generated';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Badge from '@paljs/ui/Badge';
import { Button } from '@paljs/ui/Button';
import { status, statusIcons } from 'constant';
import { EvaIcon } from '@paljs/ui/Icon';
import Tooltip from '@paljs/ui/Tooltip';
import styled from 'styled-components';
import { breakpointDown } from '@paljs/ui';

export const DashBoard: React.FC<{ id: number }> = ({ id }) => {
  const { data } = useFindOneDashboardQuery({
    variables: {
      where: {
        id,
      },
    },
  });

  return (
    <>
      <h1>{data?.findOneDashboard?.name}</h1>
      {data?.findOneDashboard?.sections
        .slice()
        .sort((a, b) => a.order - b.order)
        .map((section, index) => {
          return (
            <Card key={index}>
              <CardHeader>{section.name}</CardHeader>
              <CardBody>
                {section.steps
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((step, index) => {
                    const runs = step.job.runs.length;
                    const lastRun = step.job.runs[runs - 1];
                    return (
                      <Row key={index} middle="xs" style={{ borderBottom: '1px solid #eee' }}>
                        <StyledCol breakPoint={{ xs: 12, lg: 4, xl: 2 }}>
                          <Button
                            status={status[lastRun.status]}
                            appearance="outline"
                            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                            shape="Round"
                            size="Tiny"
                          >
                            <EvaIcon name={statusIcons[lastRun.status]} />
                            <span>{lastRun.status}</span>
                          </Button>
                          <Badge position="bottomLeft" status={status[lastRun.status]}>
                            {runs}
                          </Badge>
                        </StyledCol>
                        <StyledCol
                          breakPoint={{ xs: 12, lg: 8, xl: 4 }}
                          style={{ height: '32px', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}
                        >
                          <Tooltip
                            trigger="hint"
                            placement="top"
                            content={step.job.name}
                            status={status[lastRun.status]}
                          >
                            <span>{step.name}</span>
                          </Tooltip>
                        </StyledCol>
                        <StyledCol breakPoint={{ xs: 12, lg: 4, xl: 2 }}>{lastRun.startTime}</StyledCol>
                        <StyledCol breakPoint={{ xs: 12, lg: 4, xl: 2 }}>{lastRun.startTime}</StyledCol>
                        <StyledCol breakPoint={{ xs: 12, lg: 4, xl: 2 }}>
                          <Button appearance="ghost" size="Tiny">
                            <EvaIcon name="edit-outline" />
                          </Button>
                          <Button appearance="ghost" size="Tiny">
                            <EvaIcon name="calendar-outline" />
                          </Button>
                          <Button appearance="ghost" size="Tiny">
                            <EvaIcon name="arrow-forward-outline" />
                          </Button>
                        </StyledCol>
                      </Row>
                    );
                  })}
              </CardBody>
            </Card>
          );
        })}
    </>
  );
};

const StyledCol = styled(Col)`
  ${breakpointDown('lg')`
    border-bottom: 1px solid #eee;
  `}
`;
