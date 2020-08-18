import React, { useState } from 'react';
import { DashBoard } from 'Components/DashBoard';
import { useFindManyDashboardQuery, useFindManyGroupQuery } from 'generated';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import Select from '@paljs/ui/Select';
import { ValueType } from 'react-select';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

interface Option {
  value: any;
  label: string;
}

export default function Index() {
  const { data: dashboards } = useFindManyDashboardQuery();
  const { data: groups } = useFindManyGroupQuery();
  const [group, setGroup] = useState<Option>({ value: undefined, label: 'All groups' });
  const [dashboard, setDashboard] = useState<Option>();

  if (!dashboard && dashboards?.findManyDashboard) {
    const firstOne = dashboards.findManyDashboard[0];
    setDashboard({ value: firstOne.id, label: firstOne.name });
  }

  const getGroupsOptions = () => {
    const options: Option[] = [{ value: undefined, label: 'All groups' }];
    groups?.findManyGroup?.map((value) => options.push({ value: value.id, label: value.name }));
    return options;
  };

  const getDashboardOptions = () => {
    const options: Option[] = [];
    dashboards?.findManyDashboard
      ?.filter((value) => !group.value || value.groups.find((g) => g.id === group.value))
      .map((value) => options.push({ value: value.id, label: value.name }));
    return options;
  };

  return (
    <>
      <Card>
        <CardHeader>Dashboards Filter</CardHeader>
        <CardBody style={{ overflow: 'visible' }}>
          <Row>
            <Col breakPoint={{ xs: 12, md: 6 }} style={{ paddingBottom: '20px' }}>
              <Select
                placeholder="select group"
                value={group}
                options={getGroupsOptions()}
                onChange={(value: ValueType<Option>) => setGroup(value as Option)}
              />
            </Col>
            <Col breakPoint={{ xs: 12, md: 6 }}>
              <Select
                placeholder="select dashboard"
                value={dashboard}
                options={getDashboardOptions()}
                onChange={(value: ValueType<Option>) => setDashboard(value as Option)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
      {dashboard && <DashBoard id={dashboard.value} />}
    </>
  );
}
