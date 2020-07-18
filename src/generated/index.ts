import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
};

export type AggregateDashboard = {
  __typename?: 'AggregateDashboard';
  avg: DashboardAvgAggregateOutputType;
  count: Scalars['Int'];
  max: DashboardMaxAggregateOutputType;
  min: DashboardMinAggregateOutputType;
  sum: DashboardSumAggregateOutputType;
};

export type AggregateGroup = {
  __typename?: 'AggregateGroup';
  avg: GroupAvgAggregateOutputType;
  count: Scalars['Int'];
  max: GroupMaxAggregateOutputType;
  min: GroupMinAggregateOutputType;
  sum: GroupSumAggregateOutputType;
};

export type AggregateJob = {
  __typename?: 'AggregateJob';
  avg: JobAvgAggregateOutputType;
  count: Scalars['Int'];
  max: JobMaxAggregateOutputType;
  min: JobMinAggregateOutputType;
  sum: JobSumAggregateOutputType;
};

export type AggregateJobRun = {
  __typename?: 'AggregateJobRun';
  avg: JobRunAvgAggregateOutputType;
  count: Scalars['Int'];
  max: JobRunMaxAggregateOutputType;
  min: JobRunMinAggregateOutputType;
  sum: JobRunSumAggregateOutputType;
};

export type AggregateJournalEntry = {
  __typename?: 'AggregateJournalEntry';
  avg: JournalEntryAvgAggregateOutputType;
  count: Scalars['Int'];
  max: JournalEntryMaxAggregateOutputType;
  min: JournalEntryMinAggregateOutputType;
  sum: JournalEntrySumAggregateOutputType;
};

export type AggregateSection = {
  __typename?: 'AggregateSection';
  avg: SectionAvgAggregateOutputType;
  count: Scalars['Int'];
  max: SectionMaxAggregateOutputType;
  min: SectionMinAggregateOutputType;
  sum: SectionSumAggregateOutputType;
};

export type AggregateStep = {
  __typename?: 'AggregateStep';
  avg: StepAvgAggregateOutputType;
  count: Scalars['Int'];
  max: StepMaxAggregateOutputType;
  min: StepMinAggregateOutputType;
  sum: StepSumAggregateOutputType;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  avg: UserAvgAggregateOutputType;
  count: Scalars['Int'];
  max: UserMaxAggregateOutputType;
  min: UserMinAggregateOutputType;
  sum: UserSumAggregateOutputType;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  createdAt: Scalars['DateTime'];
  groups: Array<Group>;
  id: Scalars['Int'];
  minuteOffset: Scalars['Int'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  sections: Array<Section>;
  updatedAt: Scalars['DateTime'];
};


export type DashboardGroupsArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type DashboardSectionsArgs = {
  cursor?: Maybe<SectionWhereUniqueInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SectionWhereInput>;
};

export type DashboardAvgAggregateOutputType = {
  __typename?: 'DashboardAvgAggregateOutputType';
  id: Scalars['Float'];
  minuteOffset: Scalars['Float'];
};

export type DashboardCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<GroupCreateManyWithoutDashboardsInput>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<SectionCreateManyWithoutDashboardInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardCreateManyWithoutGroupsInput = {
  connect?: Maybe<Array<DashboardWhereUniqueInput>>;
  create?: Maybe<Array<DashboardCreateWithoutGroupsInput>>;
};

export type DashboardCreateOneWithoutSectionsInput = {
  connect?: Maybe<DashboardWhereUniqueInput>;
  create?: Maybe<DashboardCreateWithoutSectionsInput>;
};

export type DashboardCreateWithoutGroupsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<SectionCreateManyWithoutDashboardInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardCreateWithoutSectionsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<GroupCreateManyWithoutDashboardsInput>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardFilter = {
  every?: Maybe<DashboardWhereInput>;
  none?: Maybe<DashboardWhereInput>;
  some?: Maybe<DashboardWhereInput>;
};

export type DashboardMaxAggregateOutputType = {
  __typename?: 'DashboardMaxAggregateOutputType';
  id: Scalars['Int'];
  minuteOffset: Scalars['Int'];
};

export type DashboardMinAggregateOutputType = {
  __typename?: 'DashboardMinAggregateOutputType';
  id: Scalars['Int'];
  minuteOffset: Scalars['Int'];
};

export type DashboardOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  minuteOffset?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  published?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type DashboardScalarWhereInput = {
  AND?: Maybe<Array<DashboardScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  groups?: Maybe<GroupFilter>;
  id?: Maybe<IntFilter>;
  minuteOffset?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<DashboardScalarWhereInput>>;
  OR?: Maybe<Array<DashboardScalarWhereInput>>;
  published?: Maybe<BooleanFilter>;
  sections?: Maybe<SectionFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DashboardSumAggregateOutputType = {
  __typename?: 'DashboardSumAggregateOutputType';
  id: Scalars['Int'];
  minuteOffset: Scalars['Int'];
};

export type DashboardUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<GroupUpdateManyWithoutDashboardsInput>;
  id?: Maybe<Scalars['Int']>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<SectionUpdateManyWithoutDashboardInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardUpdateManyWithoutGroupsInput = {
  connect?: Maybe<Array<DashboardWhereUniqueInput>>;
  create?: Maybe<Array<DashboardCreateWithoutGroupsInput>>;
  delete?: Maybe<Array<DashboardWhereUniqueInput>>;
  deleteMany?: Maybe<Array<DashboardScalarWhereInput>>;
  disconnect?: Maybe<Array<DashboardWhereUniqueInput>>;
  set?: Maybe<Array<DashboardWhereUniqueInput>>;
  update?: Maybe<Array<DashboardUpdateWithWhereUniqueWithoutGroupsInput>>;
  updateMany?: Maybe<Array<DashboardUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<DashboardUpsertWithWhereUniqueWithoutGroupsInput>>;
};

export type DashboardUpdateManyWithWhereNestedInput = {
  data: DashboardUpdateManyDataInput;
  where: DashboardScalarWhereInput;
};

export type DashboardUpdateOneWithoutSectionsInput = {
  connect?: Maybe<DashboardWhereUniqueInput>;
  create?: Maybe<DashboardCreateWithoutSectionsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DashboardUpdateWithoutSectionsDataInput>;
  upsert?: Maybe<DashboardUpsertWithoutSectionsInput>;
};

export type DashboardUpdateWithoutGroupsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  sections?: Maybe<SectionUpdateManyWithoutDashboardInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardUpdateWithoutSectionsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<GroupUpdateManyWithoutDashboardsInput>;
  id?: Maybe<Scalars['Int']>;
  minuteOffset?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DashboardUpdateWithWhereUniqueWithoutGroupsInput = {
  data: DashboardUpdateWithoutGroupsDataInput;
  where: DashboardWhereUniqueInput;
};

export type DashboardUpsertWithoutSectionsInput = {
  create: DashboardCreateWithoutSectionsInput;
  update: DashboardUpdateWithoutSectionsDataInput;
};

export type DashboardUpsertWithWhereUniqueWithoutGroupsInput = {
  create: DashboardCreateWithoutGroupsInput;
  update: DashboardUpdateWithoutGroupsDataInput;
  where: DashboardWhereUniqueInput;
};

export type DashboardWhereInput = {
  AND?: Maybe<Array<DashboardWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  groups?: Maybe<GroupFilter>;
  id?: Maybe<IntFilter>;
  minuteOffset?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<DashboardWhereInput>>;
  OR?: Maybe<Array<DashboardWhereInput>>;
  published?: Maybe<BooleanFilter>;
  sections?: Maybe<SectionFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DashboardWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime'];
  dashboards: Array<Dashboard>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type GroupDashboardsArgs = {
  cursor?: Maybe<DashboardWhereUniqueInput>;
  orderBy?: Maybe<DashboardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DashboardWhereInput>;
};


export type GroupUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type GroupAvgAggregateOutputType = {
  __typename?: 'GroupAvgAggregateOutputType';
  id: Scalars['Float'];
};

export type GroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboards?: Maybe<DashboardCreateManyWithoutGroupsInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateManyWithoutGroupInput>;
};

export type GroupCreateManyWithoutDashboardsInput = {
  connect?: Maybe<Array<GroupWhereUniqueInput>>;
  create?: Maybe<Array<GroupCreateWithoutDashboardsInput>>;
};

export type GroupCreateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  create?: Maybe<GroupCreateWithoutUsersInput>;
};

export type GroupCreateWithoutDashboardsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateManyWithoutGroupInput>;
};

export type GroupCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboards?: Maybe<DashboardCreateManyWithoutGroupsInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupFilter = {
  every?: Maybe<GroupWhereInput>;
  none?: Maybe<GroupWhereInput>;
  some?: Maybe<GroupWhereInput>;
};

export type GroupMaxAggregateOutputType = {
  __typename?: 'GroupMaxAggregateOutputType';
  id: Scalars['Int'];
};

export type GroupMinAggregateOutputType = {
  __typename?: 'GroupMinAggregateOutputType';
  id: Scalars['Int'];
};

export type GroupOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type GroupScalarWhereInput = {
  AND?: Maybe<Array<GroupScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  dashboards?: Maybe<DashboardFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<GroupScalarWhereInput>>;
  OR?: Maybe<Array<GroupScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserFilter>;
};

export type GroupSumAggregateOutputType = {
  __typename?: 'GroupSumAggregateOutputType';
  id: Scalars['Int'];
};

export type GroupUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboards?: Maybe<DashboardUpdateManyWithoutGroupsInput>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUpdateManyWithoutDashboardsInput = {
  connect?: Maybe<Array<GroupWhereUniqueInput>>;
  create?: Maybe<Array<GroupCreateWithoutDashboardsInput>>;
  delete?: Maybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GroupScalarWhereInput>>;
  disconnect?: Maybe<Array<GroupWhereUniqueInput>>;
  set?: Maybe<Array<GroupWhereUniqueInput>>;
  update?: Maybe<Array<GroupUpdateWithWhereUniqueWithoutDashboardsInput>>;
  updateMany?: Maybe<Array<GroupUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<GroupUpsertWithWhereUniqueWithoutDashboardsInput>>;
};

export type GroupUpdateManyWithWhereNestedInput = {
  data: GroupUpdateManyDataInput;
  where: GroupScalarWhereInput;
};

export type GroupUpdateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  create?: Maybe<GroupCreateWithoutUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUpdateWithoutUsersDataInput>;
  upsert?: Maybe<GroupUpsertWithoutUsersInput>;
};

export type GroupUpdateWithoutDashboardsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateWithoutUsersDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboards?: Maybe<DashboardUpdateManyWithoutGroupsInput>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUpdateWithWhereUniqueWithoutDashboardsInput = {
  data: GroupUpdateWithoutDashboardsDataInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpsertWithoutUsersInput = {
  create: GroupCreateWithoutUsersInput;
  update: GroupUpdateWithoutUsersDataInput;
};

export type GroupUpsertWithWhereUniqueWithoutDashboardsInput = {
  create: GroupCreateWithoutDashboardsInput;
  update: GroupUpdateWithoutDashboardsDataInput;
  where: GroupWhereUniqueInput;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<GroupWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  dashboards?: Maybe<DashboardFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<GroupWhereInput>>;
  OR?: Maybe<Array<GroupWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Job = {
  __typename?: 'Job';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  runs: Array<JobRun>;
  Step: Array<Step>;
  updatedAt: Scalars['DateTime'];
};


export type JobRunsArgs = {
  cursor?: Maybe<JobRunWhereUniqueInput>;
  orderBy?: Maybe<JobRunOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JobRunWhereInput>;
};


export type JobStepArgs = {
  cursor?: Maybe<StepWhereUniqueInput>;
  orderBy?: Maybe<StepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StepWhereInput>;
};

export type JobAvgAggregateOutputType = {
  __typename?: 'JobAvgAggregateOutputType';
  id: Scalars['Float'];
  joid: Scalars['Float'];
};

export type JobCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  runs?: Maybe<JobRunCreateManyWithoutJobInput>;
  Step?: Maybe<StepCreateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobCreateOneWithoutRunsInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutRunsInput>;
};

export type JobCreateOneWithoutStepInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutStepInput>;
};

export type JobCreateWithoutRunsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  Step?: Maybe<StepCreateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobCreateWithoutStepInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  runs?: Maybe<JobRunCreateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobMaxAggregateOutputType = {
  __typename?: 'JobMaxAggregateOutputType';
  id: Scalars['Int'];
  joid: Scalars['Int'];
};

export type JobMinAggregateOutputType = {
  __typename?: 'JobMinAggregateOutputType';
  id: Scalars['Int'];
  joid: Scalars['Int'];
};

export type JobOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  jobType?: Maybe<OrderByArg>;
  joid?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type JobRun = {
  __typename?: 'JobRun';
  createdAt: Scalars['DateTime'];
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  job: Job;
  jobId: Scalars['Int'];
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  status?: Maybe<JobStatus>;
  updatedAt: Scalars['DateTime'];
};

export type JobRunAvgAggregateOutputType = {
  __typename?: 'JobRunAvgAggregateOutputType';
  exitCode: Scalars['Float'];
  id: Scalars['Float'];
  jobId: Scalars['Float'];
  jobRunId: Scalars['Float'];
  joid: Scalars['Float'];
};

export type JobRunCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  job: JobCreateOneWithoutRunsInput;
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunCreateManyWithoutJobInput = {
  connect?: Maybe<Array<JobRunWhereUniqueInput>>;
  create?: Maybe<Array<JobRunCreateWithoutJobInput>>;
};

export type JobRunCreateWithoutJobInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunFilter = {
  every?: Maybe<JobRunWhereInput>;
  none?: Maybe<JobRunWhereInput>;
  some?: Maybe<JobRunWhereInput>;
};

export type JobRunMaxAggregateOutputType = {
  __typename?: 'JobRunMaxAggregateOutputType';
  exitCode: Scalars['Int'];
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  jobRunId: Scalars['Int'];
  joid: Scalars['Int'];
};

export type JobRunMinAggregateOutputType = {
  __typename?: 'JobRunMinAggregateOutputType';
  exitCode: Scalars['Int'];
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  jobRunId: Scalars['Int'];
  joid: Scalars['Int'];
};

export type JobRunOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  endTime?: Maybe<OrderByArg>;
  exitCode?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  jobId?: Maybe<OrderByArg>;
  jobRunId?: Maybe<OrderByArg>;
  joid?: Maybe<OrderByArg>;
  moreInfo?: Maybe<OrderByArg>;
  startTime?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type JobRunScalarWhereInput = {
  AND?: Maybe<Array<JobRunScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  endTime?: Maybe<NullableDateTimeFilter>;
  exitCode?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  jobId?: Maybe<IntFilter>;
  jobRunId?: Maybe<NullableIntFilter>;
  joid?: Maybe<NullableIntFilter>;
  moreInfo?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<JobRunScalarWhereInput>>;
  OR?: Maybe<Array<JobRunScalarWhereInput>>;
  startTime?: Maybe<DateTimeFilter>;
  status?: Maybe<NullableJobStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type JobRunSumAggregateOutputType = {
  __typename?: 'JobRunSumAggregateOutputType';
  exitCode: Scalars['Int'];
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  jobRunId: Scalars['Int'];
  joid: Scalars['Int'];
};

export type JobRunUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  job?: Maybe<JobUpdateOneRequiredWithoutRunsInput>;
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunUpdateManyWithoutJobInput = {
  connect?: Maybe<Array<JobRunWhereUniqueInput>>;
  create?: Maybe<Array<JobRunCreateWithoutJobInput>>;
  delete?: Maybe<Array<JobRunWhereUniqueInput>>;
  deleteMany?: Maybe<Array<JobRunScalarWhereInput>>;
  disconnect?: Maybe<Array<JobRunWhereUniqueInput>>;
  set?: Maybe<Array<JobRunWhereUniqueInput>>;
  update?: Maybe<Array<JobRunUpdateWithWhereUniqueWithoutJobInput>>;
  updateMany?: Maybe<Array<JobRunUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<JobRunUpsertWithWhereUniqueWithoutJobInput>>;
};

export type JobRunUpdateManyWithWhereNestedInput = {
  data: JobRunUpdateManyDataInput;
  where: JobRunScalarWhereInput;
};

export type JobRunUpdateWithoutJobDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  jobRunId?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  moreInfo?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobRunUpdateWithWhereUniqueWithoutJobInput = {
  data: JobRunUpdateWithoutJobDataInput;
  where: JobRunWhereUniqueInput;
};

export type JobRunUpsertWithWhereUniqueWithoutJobInput = {
  create: JobRunCreateWithoutJobInput;
  update: JobRunUpdateWithoutJobDataInput;
  where: JobRunWhereUniqueInput;
};

export type JobRunWhereInput = {
  AND?: Maybe<Array<JobRunWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  endTime?: Maybe<NullableDateTimeFilter>;
  exitCode?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  job?: Maybe<JobWhereInput>;
  jobId?: Maybe<IntFilter>;
  jobRunId?: Maybe<NullableIntFilter>;
  joid?: Maybe<NullableIntFilter>;
  moreInfo?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<JobRunWhereInput>>;
  OR?: Maybe<Array<JobRunWhereInput>>;
  startTime?: Maybe<DateTimeFilter>;
  status?: Maybe<NullableJobStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type JobRunWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum JobStatus {
  Activated = 'ACTIVATED',
  Failure = 'FAILURE',
  Inactive = 'INACTIVE',
  OnHold = 'ON_HOLD',
  OnIce = 'ON_ICE',
  OnNoexec = 'ON_NOEXEC',
  PendMach = 'PEND_MACH',
  QueWait = 'QUE_WAIT',
  Restart = 'RESTART',
  Reswait = 'RESWAIT',
  Running = 'RUNNING',
  Starting = 'STARTING',
  Success = 'SUCCESS',
  Terminated = 'TERMINATED',
  WaitReply = 'WAIT_REPLY'
}

export type JobSumAggregateOutputType = {
  __typename?: 'JobSumAggregateOutputType';
  id: Scalars['Int'];
  joid: Scalars['Int'];
};

export enum JobType {
  Autosys = 'AUTOSYS',
  Database = 'DATABASE',
  Fmc = 'FMC',
  Instrumented = 'INSTRUMENTED'
}

export type JobUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  runs?: Maybe<JobRunUpdateManyWithoutJobInput>;
  Step?: Maybe<StepUpdateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobUpdateOneRequiredWithoutRunsInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutRunsInput>;
  update?: Maybe<JobUpdateWithoutRunsDataInput>;
  upsert?: Maybe<JobUpsertWithoutRunsInput>;
};

export type JobUpdateOneRequiredWithoutStepInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutStepInput>;
  update?: Maybe<JobUpdateWithoutStepDataInput>;
  upsert?: Maybe<JobUpsertWithoutStepInput>;
};

export type JobUpdateWithoutRunsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  Step?: Maybe<StepUpdateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobUpdateWithoutStepDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  jobType?: Maybe<JobType>;
  joid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  runs?: Maybe<JobRunUpdateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobUpsertWithoutRunsInput = {
  create: JobCreateWithoutRunsInput;
  update: JobUpdateWithoutRunsDataInput;
};

export type JobUpsertWithoutStepInput = {
  create: JobCreateWithoutStepInput;
  update: JobUpdateWithoutStepDataInput;
};

export type JobWhereInput = {
  AND?: Maybe<Array<JobWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  jobType?: Maybe<NullableJobTypeFilter>;
  joid?: Maybe<NullableIntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<JobWhereInput>>;
  OR?: Maybe<Array<JobWhereInput>>;
  runs?: Maybe<JobRunFilter>;
  Step?: Maybe<StepFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type JobWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  joid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type JournalEntry = {
  __typename?: 'JournalEntry';
  entry?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  step: Step;
  stepId: Scalars['Int'];
};

export type JournalEntryAvgAggregateOutputType = {
  __typename?: 'JournalEntryAvgAggregateOutputType';
  id: Scalars['Float'];
  stepId: Scalars['Float'];
};

export type JournalEntryCreateInput = {
  entry?: Maybe<Scalars['String']>;
  step: StepCreateOneWithoutJournalEntriesInput;
};

export type JournalEntryCreateManyWithoutStepInput = {
  connect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  create?: Maybe<Array<JournalEntryCreateWithoutStepInput>>;
};

export type JournalEntryCreateWithoutStepInput = {
  entry?: Maybe<Scalars['String']>;
};

export type JournalEntryFilter = {
  every?: Maybe<JournalEntryWhereInput>;
  none?: Maybe<JournalEntryWhereInput>;
  some?: Maybe<JournalEntryWhereInput>;
};

export type JournalEntryMaxAggregateOutputType = {
  __typename?: 'JournalEntryMaxAggregateOutputType';
  id: Scalars['Int'];
  stepId: Scalars['Int'];
};

export type JournalEntryMinAggregateOutputType = {
  __typename?: 'JournalEntryMinAggregateOutputType';
  id: Scalars['Int'];
  stepId: Scalars['Int'];
};

export type JournalEntryOrderByInput = {
  entry?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  stepId?: Maybe<OrderByArg>;
};

export type JournalEntryScalarWhereInput = {
  AND?: Maybe<Array<JournalEntryScalarWhereInput>>;
  entry?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<JournalEntryScalarWhereInput>>;
  OR?: Maybe<Array<JournalEntryScalarWhereInput>>;
  stepId?: Maybe<IntFilter>;
};

export type JournalEntrySumAggregateOutputType = {
  __typename?: 'JournalEntrySumAggregateOutputType';
  id: Scalars['Int'];
  stepId: Scalars['Int'];
};

export type JournalEntryUpdateInput = {
  entry?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  step?: Maybe<StepUpdateOneRequiredWithoutJournalEntriesInput>;
};

export type JournalEntryUpdateManyDataInput = {
  entry?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type JournalEntryUpdateManyMutationInput = {
  entry?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type JournalEntryUpdateManyWithoutStepInput = {
  connect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  create?: Maybe<Array<JournalEntryCreateWithoutStepInput>>;
  delete?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<JournalEntryScalarWhereInput>>;
  disconnect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  set?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  update?: Maybe<Array<JournalEntryUpdateWithWhereUniqueWithoutStepInput>>;
  updateMany?: Maybe<Array<JournalEntryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<JournalEntryUpsertWithWhereUniqueWithoutStepInput>>;
};

export type JournalEntryUpdateManyWithWhereNestedInput = {
  data: JournalEntryUpdateManyDataInput;
  where: JournalEntryScalarWhereInput;
};

export type JournalEntryUpdateWithoutStepDataInput = {
  entry?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type JournalEntryUpdateWithWhereUniqueWithoutStepInput = {
  data: JournalEntryUpdateWithoutStepDataInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpsertWithWhereUniqueWithoutStepInput = {
  create: JournalEntryCreateWithoutStepInput;
  update: JournalEntryUpdateWithoutStepDataInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryWhereInput = {
  AND?: Maybe<Array<JournalEntryWhereInput>>;
  entry?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<JournalEntryWhereInput>>;
  OR?: Maybe<Array<JournalEntryWhereInput>>;
  step?: Maybe<StepWhereInput>;
  stepId?: Maybe<IntFilter>;
};

export type JournalEntryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneDashboard: Dashboard;
  createOneGroup: Group;
  createOneJob: Job;
  createOneJobRun: JobRun;
  createOneJournalEntry: JournalEntry;
  createOneSection: Section;
  createOneStep: Step;
  createOneUser: User;
  deleteOneDashboard?: Maybe<Dashboard>;
  deleteOneGroup?: Maybe<Group>;
  deleteOneJob?: Maybe<Job>;
  deleteOneJobRun?: Maybe<JobRun>;
  deleteOneJournalEntry?: Maybe<JournalEntry>;
  deleteOneSection?: Maybe<Section>;
  deleteOneStep?: Maybe<Step>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  signup: User;
  updateField: Field;
  updateModel: Model;
  updateOneDashboard: Dashboard;
  updateOneGroup: Group;
  updateOneJob: Job;
  updateOneJobRun: JobRun;
  updateOneJournalEntry: JournalEntry;
  updateOneSection: Section;
  updateOneStep: Step;
  updateOneUser: User;
  updatePassword: Scalars['Boolean'];
  upsertOneDashboard: Dashboard;
  upsertOneGroup: Group;
  upsertOneJob: Job;
  upsertOneJobRun: JobRun;
  upsertOneJournalEntry: JournalEntry;
  upsertOneSection: Section;
  upsertOneStep: Step;
  upsertOneUser: User;
};


export type MutationCreateOneDashboardArgs = {
  data: DashboardCreateInput;
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateOneJobArgs = {
  data: JobCreateInput;
};


export type MutationCreateOneJobRunArgs = {
  data: JobRunCreateInput;
};


export type MutationCreateOneJournalEntryArgs = {
  data: JournalEntryCreateInput;
};


export type MutationCreateOneSectionArgs = {
  data: SectionCreateInput;
};


export type MutationCreateOneStepArgs = {
  data: StepCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneDashboardArgs = {
  where: DashboardWhereUniqueInput;
};


export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteOneJobArgs = {
  where: JobWhereUniqueInput;
};


export type MutationDeleteOneJobRunArgs = {
  where: JobRunWhereUniqueInput;
};


export type MutationDeleteOneJournalEntryArgs = {
  where: JournalEntryWhereUniqueInput;
};


export type MutationDeleteOneSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type MutationDeleteOneStepArgs = {
  where: StepWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data?: Maybe<UpdateFieldInput>;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateModelArgs = {
  data?: Maybe<UpdateModelInput>;
  id: Scalars['String'];
};


export type MutationUpdateOneDashboardArgs = {
  data: DashboardUpdateInput;
  where: DashboardWhereUniqueInput;
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateOneJobArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpdateOneJobRunArgs = {
  data: JobRunUpdateInput;
  where: JobRunWhereUniqueInput;
};


export type MutationUpdateOneJournalEntryArgs = {
  data: JournalEntryUpdateInput;
  where: JournalEntryWhereUniqueInput;
};


export type MutationUpdateOneSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpdateOneStepArgs = {
  data: StepUpdateInput;
  where: StepWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneDashboardArgs = {
  create: DashboardCreateInput;
  update: DashboardUpdateInput;
  where: DashboardWhereUniqueInput;
};


export type MutationUpsertOneGroupArgs = {
  create: GroupCreateInput;
  update: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpsertOneJobArgs = {
  create: JobCreateInput;
  update: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpsertOneJobRunArgs = {
  create: JobRunCreateInput;
  update: JobRunUpdateInput;
  where: JobRunWhereUniqueInput;
};


export type MutationUpsertOneJournalEntryArgs = {
  create: JournalEntryCreateInput;
  update: JournalEntryUpdateInput;
  where: JournalEntryWhereUniqueInput;
};


export type MutationUpsertOneSectionArgs = {
  create: SectionCreateInput;
  update: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpsertOneStepArgs = {
  create: StepCreateInput;
  update: StepUpdateInput;
  where: StepWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NullableDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NullableJobStatusFilter = {
  equals?: Maybe<JobStatus>;
  in?: Maybe<Array<JobStatus>>;
  not?: Maybe<JobStatus>;
  notIn?: Maybe<Array<JobStatus>>;
};

export type NullableJobTypeFilter = {
  equals?: Maybe<JobType>;
  in?: Maybe<Array<JobType>>;
  not?: Maybe<JobType>;
  notIn?: Maybe<Array<JobType>>;
};

export type NullableStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  findManyDashboard?: Maybe<Array<Dashboard>>;
  findManyDashboardCount: Scalars['Int'];
  findManyGroup?: Maybe<Array<Group>>;
  findManyGroupCount: Scalars['Int'];
  findManyJob?: Maybe<Array<Job>>;
  findManyJobCount: Scalars['Int'];
  findManyJobRun?: Maybe<Array<JobRun>>;
  findManyJobRunCount: Scalars['Int'];
  findManyJournalEntry?: Maybe<Array<JournalEntry>>;
  findManyJournalEntryCount: Scalars['Int'];
  findManySection?: Maybe<Array<Section>>;
  findManySectionCount: Scalars['Int'];
  findManyStep?: Maybe<Array<Step>>;
  findManyStepCount: Scalars['Int'];
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int'];
  findOneDashboard?: Maybe<Dashboard>;
  findOneGroup?: Maybe<Group>;
  findOneJob?: Maybe<Job>;
  findOneJobRun?: Maybe<JobRun>;
  findOneJournalEntry?: Maybe<JournalEntry>;
  findOneSection?: Maybe<Section>;
  findOneStep?: Maybe<Step>;
  findOneUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryFindManyDashboardArgs = {
  cursor?: Maybe<DashboardWhereUniqueInput>;
  orderBy?: Maybe<DashboardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DashboardWhereInput>;
};


export type QueryFindManyDashboardCountArgs = {
  cursor?: Maybe<DashboardWhereUniqueInput>;
  orderBy?: Maybe<DashboardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DashboardWhereInput>;
};


export type QueryFindManyGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyGroupCountArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyJobArgs = {
  cursor?: Maybe<JobWhereUniqueInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
};


export type QueryFindManyJobCountArgs = {
  cursor?: Maybe<JobWhereUniqueInput>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
};


export type QueryFindManyJobRunArgs = {
  cursor?: Maybe<JobRunWhereUniqueInput>;
  orderBy?: Maybe<JobRunOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JobRunWhereInput>;
};


export type QueryFindManyJobRunCountArgs = {
  cursor?: Maybe<JobRunWhereUniqueInput>;
  orderBy?: Maybe<JobRunOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JobRunWhereInput>;
};


export type QueryFindManyJournalEntryArgs = {
  cursor?: Maybe<JournalEntryWhereUniqueInput>;
  orderBy?: Maybe<JournalEntryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JournalEntryWhereInput>;
};


export type QueryFindManyJournalEntryCountArgs = {
  cursor?: Maybe<JournalEntryWhereUniqueInput>;
  orderBy?: Maybe<JournalEntryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JournalEntryWhereInput>;
};


export type QueryFindManySectionArgs = {
  cursor?: Maybe<SectionWhereUniqueInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SectionWhereInput>;
};


export type QueryFindManySectionCountArgs = {
  cursor?: Maybe<SectionWhereUniqueInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SectionWhereInput>;
};


export type QueryFindManyStepArgs = {
  cursor?: Maybe<StepWhereUniqueInput>;
  orderBy?: Maybe<StepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StepWhereInput>;
};


export type QueryFindManyStepCountArgs = {
  cursor?: Maybe<StepWhereUniqueInput>;
  orderBy?: Maybe<StepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StepWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindOneDashboardArgs = {
  where: DashboardWhereUniqueInput;
};


export type QueryFindOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryFindOneJobArgs = {
  where: JobWhereUniqueInput;
};


export type QueryFindOneJobRunArgs = {
  where: JobRunWhereUniqueInput;
};


export type QueryFindOneJournalEntryArgs = {
  where: JournalEntryWhereUniqueInput;
};


export type QueryFindOneSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type QueryFindOneStepArgs = {
  where: StepWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export type Section = {
  __typename?: 'Section';
  createdAt: Scalars['DateTime'];
  dashboard?: Maybe<Dashboard>;
  dashboardId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  steps: Array<Step>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type SectionStepsArgs = {
  cursor?: Maybe<StepWhereUniqueInput>;
  orderBy?: Maybe<StepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StepWhereInput>;
};

export type SectionAvgAggregateOutputType = {
  __typename?: 'SectionAvgAggregateOutputType';
  dashboardId: Scalars['Float'];
  id: Scalars['Float'];
  order: Scalars['Float'];
};

export type SectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboard?: Maybe<DashboardCreateOneWithoutSectionsInput>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  steps?: Maybe<StepCreateManyWithoutSectionInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionCreateManyWithoutDashboardInput = {
  connect?: Maybe<Array<SectionWhereUniqueInput>>;
  create?: Maybe<Array<SectionCreateWithoutDashboardInput>>;
};

export type SectionCreateOneWithoutStepsInput = {
  connect?: Maybe<SectionWhereUniqueInput>;
  create?: Maybe<SectionCreateWithoutStepsInput>;
};

export type SectionCreateWithoutDashboardInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  steps?: Maybe<StepCreateManyWithoutSectionInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionCreateWithoutStepsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboard?: Maybe<DashboardCreateOneWithoutSectionsInput>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionFilter = {
  every?: Maybe<SectionWhereInput>;
  none?: Maybe<SectionWhereInput>;
  some?: Maybe<SectionWhereInput>;
};

export type SectionMaxAggregateOutputType = {
  __typename?: 'SectionMaxAggregateOutputType';
  dashboardId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
};

export type SectionMinAggregateOutputType = {
  __typename?: 'SectionMinAggregateOutputType';
  dashboardId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
};

export type SectionOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  dashboardId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  order?: Maybe<OrderByArg>;
  published?: Maybe<OrderByArg>;
  successCriteria?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type SectionScalarWhereInput = {
  AND?: Maybe<Array<SectionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  dashboardId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SectionScalarWhereInput>>;
  OR?: Maybe<Array<SectionScalarWhereInput>>;
  order?: Maybe<NullableIntFilter>;
  published?: Maybe<BooleanFilter>;
  steps?: Maybe<StepFilter>;
  successCriteria?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SectionSumAggregateOutputType = {
  __typename?: 'SectionSumAggregateOutputType';
  dashboardId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
};

export type SectionUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboard?: Maybe<DashboardUpdateOneWithoutSectionsInput>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  steps?: Maybe<StepUpdateManyWithoutSectionInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionUpdateManyWithoutDashboardInput = {
  connect?: Maybe<Array<SectionWhereUniqueInput>>;
  create?: Maybe<Array<SectionCreateWithoutDashboardInput>>;
  delete?: Maybe<Array<SectionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SectionScalarWhereInput>>;
  disconnect?: Maybe<Array<SectionWhereUniqueInput>>;
  set?: Maybe<Array<SectionWhereUniqueInput>>;
  update?: Maybe<Array<SectionUpdateWithWhereUniqueWithoutDashboardInput>>;
  updateMany?: Maybe<Array<SectionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<SectionUpsertWithWhereUniqueWithoutDashboardInput>>;
};

export type SectionUpdateManyWithWhereNestedInput = {
  data: SectionUpdateManyDataInput;
  where: SectionScalarWhereInput;
};

export type SectionUpdateOneRequiredWithoutStepsInput = {
  connect?: Maybe<SectionWhereUniqueInput>;
  create?: Maybe<SectionCreateWithoutStepsInput>;
  update?: Maybe<SectionUpdateWithoutStepsDataInput>;
  upsert?: Maybe<SectionUpsertWithoutStepsInput>;
};

export type SectionUpdateWithoutDashboardDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  steps?: Maybe<StepUpdateManyWithoutSectionInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionUpdateWithoutStepsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dashboard?: Maybe<DashboardUpdateOneWithoutSectionsInput>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionUpdateWithWhereUniqueWithoutDashboardInput = {
  data: SectionUpdateWithoutDashboardDataInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpsertWithoutStepsInput = {
  create: SectionCreateWithoutStepsInput;
  update: SectionUpdateWithoutStepsDataInput;
};

export type SectionUpsertWithWhereUniqueWithoutDashboardInput = {
  create: SectionCreateWithoutDashboardInput;
  update: SectionUpdateWithoutDashboardDataInput;
  where: SectionWhereUniqueInput;
};

export type SectionWhereInput = {
  AND?: Maybe<Array<SectionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  dashboard?: Maybe<DashboardWhereInput>;
  dashboardId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SectionWhereInput>>;
  OR?: Maybe<Array<SectionWhereInput>>;
  order?: Maybe<NullableIntFilter>;
  published?: Maybe<BooleanFilter>;
  steps?: Maybe<StepFilter>;
  successCriteria?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SectionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Step = {
  __typename?: 'Step';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  job: Job;
  jobId: Scalars['Int'];
  journalEntries: Array<JournalEntry>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  section: Section;
  sectionId: Scalars['Int'];
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type StepJournalEntriesArgs = {
  cursor?: Maybe<JournalEntryWhereUniqueInput>;
  orderBy?: Maybe<JournalEntryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JournalEntryWhereInput>;
};

export type StepAvgAggregateOutputType = {
  __typename?: 'StepAvgAggregateOutputType';
  id: Scalars['Float'];
  jobId: Scalars['Float'];
  order: Scalars['Float'];
  sectionId: Scalars['Float'];
};

export type StepCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  job: JobCreateOneWithoutStepInput;
  journalEntries?: Maybe<JournalEntryCreateManyWithoutStepInput>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  section: SectionCreateOneWithoutStepsInput;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepCreateManyWithoutJobInput = {
  connect?: Maybe<Array<StepWhereUniqueInput>>;
  create?: Maybe<Array<StepCreateWithoutJobInput>>;
};

export type StepCreateManyWithoutSectionInput = {
  connect?: Maybe<Array<StepWhereUniqueInput>>;
  create?: Maybe<Array<StepCreateWithoutSectionInput>>;
};

export type StepCreateOneWithoutJournalEntriesInput = {
  connect?: Maybe<StepWhereUniqueInput>;
  create?: Maybe<StepCreateWithoutJournalEntriesInput>;
};

export type StepCreateWithoutJobInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  journalEntries?: Maybe<JournalEntryCreateManyWithoutStepInput>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  section: SectionCreateOneWithoutStepsInput;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepCreateWithoutJournalEntriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  job: JobCreateOneWithoutStepInput;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  section: SectionCreateOneWithoutStepsInput;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepCreateWithoutSectionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  job: JobCreateOneWithoutStepInput;
  journalEntries?: Maybe<JournalEntryCreateManyWithoutStepInput>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepFilter = {
  every?: Maybe<StepWhereInput>;
  none?: Maybe<StepWhereInput>;
  some?: Maybe<StepWhereInput>;
};

export type StepMaxAggregateOutputType = {
  __typename?: 'StepMaxAggregateOutputType';
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  order: Scalars['Int'];
  sectionId: Scalars['Int'];
};

export type StepMinAggregateOutputType = {
  __typename?: 'StepMinAggregateOutputType';
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  order: Scalars['Int'];
  sectionId: Scalars['Int'];
};

export type StepOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  jobId?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  order?: Maybe<OrderByArg>;
  sectionId?: Maybe<OrderByArg>;
  successCriteria?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type StepScalarWhereInput = {
  AND?: Maybe<Array<StepScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  jobId?: Maybe<IntFilter>;
  journalEntries?: Maybe<JournalEntryFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<StepScalarWhereInput>>;
  OR?: Maybe<Array<StepScalarWhereInput>>;
  order?: Maybe<NullableIntFilter>;
  sectionId?: Maybe<IntFilter>;
  successCriteria?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StepSumAggregateOutputType = {
  __typename?: 'StepSumAggregateOutputType';
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  order: Scalars['Int'];
  sectionId: Scalars['Int'];
};

export type StepUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  job?: Maybe<JobUpdateOneRequiredWithoutStepInput>;
  journalEntries?: Maybe<JournalEntryUpdateManyWithoutStepInput>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  section?: Maybe<SectionUpdateOneRequiredWithoutStepsInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepUpdateManyWithoutJobInput = {
  connect?: Maybe<Array<StepWhereUniqueInput>>;
  create?: Maybe<Array<StepCreateWithoutJobInput>>;
  delete?: Maybe<Array<StepWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StepScalarWhereInput>>;
  disconnect?: Maybe<Array<StepWhereUniqueInput>>;
  set?: Maybe<Array<StepWhereUniqueInput>>;
  update?: Maybe<Array<StepUpdateWithWhereUniqueWithoutJobInput>>;
  updateMany?: Maybe<Array<StepUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<StepUpsertWithWhereUniqueWithoutJobInput>>;
};

export type StepUpdateManyWithoutSectionInput = {
  connect?: Maybe<Array<StepWhereUniqueInput>>;
  create?: Maybe<Array<StepCreateWithoutSectionInput>>;
  delete?: Maybe<Array<StepWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StepScalarWhereInput>>;
  disconnect?: Maybe<Array<StepWhereUniqueInput>>;
  set?: Maybe<Array<StepWhereUniqueInput>>;
  update?: Maybe<Array<StepUpdateWithWhereUniqueWithoutSectionInput>>;
  updateMany?: Maybe<Array<StepUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<StepUpsertWithWhereUniqueWithoutSectionInput>>;
};

export type StepUpdateManyWithWhereNestedInput = {
  data: StepUpdateManyDataInput;
  where: StepScalarWhereInput;
};

export type StepUpdateOneRequiredWithoutJournalEntriesInput = {
  connect?: Maybe<StepWhereUniqueInput>;
  create?: Maybe<StepCreateWithoutJournalEntriesInput>;
  update?: Maybe<StepUpdateWithoutJournalEntriesDataInput>;
  upsert?: Maybe<StepUpsertWithoutJournalEntriesInput>;
};

export type StepUpdateWithoutJobDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  journalEntries?: Maybe<JournalEntryUpdateManyWithoutStepInput>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  section?: Maybe<SectionUpdateOneRequiredWithoutStepsInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepUpdateWithoutJournalEntriesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  job?: Maybe<JobUpdateOneRequiredWithoutStepInput>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  section?: Maybe<SectionUpdateOneRequiredWithoutStepsInput>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepUpdateWithoutSectionDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  job?: Maybe<JobUpdateOneRequiredWithoutStepInput>;
  journalEntries?: Maybe<JournalEntryUpdateManyWithoutStepInput>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepUpdateWithWhereUniqueWithoutJobInput = {
  data: StepUpdateWithoutJobDataInput;
  where: StepWhereUniqueInput;
};

export type StepUpdateWithWhereUniqueWithoutSectionInput = {
  data: StepUpdateWithoutSectionDataInput;
  where: StepWhereUniqueInput;
};

export type StepUpsertWithoutJournalEntriesInput = {
  create: StepCreateWithoutJournalEntriesInput;
  update: StepUpdateWithoutJournalEntriesDataInput;
};

export type StepUpsertWithWhereUniqueWithoutJobInput = {
  create: StepCreateWithoutJobInput;
  update: StepUpdateWithoutJobDataInput;
  where: StepWhereUniqueInput;
};

export type StepUpsertWithWhereUniqueWithoutSectionInput = {
  create: StepCreateWithoutSectionInput;
  update: StepUpdateWithoutSectionDataInput;
  where: StepWhereUniqueInput;
};

export type StepWhereInput = {
  AND?: Maybe<Array<StepWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  job?: Maybe<JobWhereInput>;
  jobId?: Maybe<IntFilter>;
  journalEntries?: Maybe<JournalEntryFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<StepWhereInput>>;
  OR?: Maybe<Array<StepWhereInput>>;
  order?: Maybe<NullableIntFilter>;
  section?: Maybe<SectionWhereInput>;
  sectionId?: Maybe<IntFilter>;
  successCriteria?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StepWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Scalars['String']>>;
  fields?: Maybe<Array<UpdateFieldInput>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  groupId: Scalars['Float'];
  id: Scalars['Float'];
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserCreateManyWithoutGroupInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutGroupInput>>;
};

export type UserCreateWithoutGroupInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  groupId: Scalars['Int'];
  id: Scalars['Int'];
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  groupId: Scalars['Int'];
  id: Scalars['Int'];
};

export type UserOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  groupId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  password?: Maybe<StringFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  groupId: Scalars['Int'];
  id: Scalars['Int'];
};

export type UserUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutGroupInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput;
  where: UserScalarWhereInput;
};

export type UserUpdateWithoutGroupDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateWithWhereUniqueWithoutGroupInput = {
  data: UserUpdateWithoutGroupDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutGroupInput = {
  create: UserCreateWithoutGroupInput;
  update: UserUpdateWithoutGroupDataInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  password?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type DashboardFieldsFragment = (
  { __typename?: 'Dashboard' }
  & Pick<Dashboard, 'id' | 'name' | 'createdAt' | 'updatedAt' | 'published' | 'minuteOffset'>
);

export type DashboardFragment = (
  { __typename?: 'Dashboard' }
  & DashboardFieldsFragment
);

export type FindOneDashboardQueryVariables = Exact<{
  where: DashboardWhereUniqueInput;
}>;


export type FindOneDashboardQuery = (
  { __typename?: 'Query' }
  & { findOneDashboard?: Maybe<(
    { __typename?: 'Dashboard' }
    & DashboardFragment
  )> }
);

export type FindManyDashboardQueryVariables = Exact<{
  where?: Maybe<DashboardWhereInput>;
  orderBy?: Maybe<DashboardOrderByInput>;
  cursor?: Maybe<DashboardWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyDashboardQuery = (
  { __typename?: 'Query' }
  & { findManyDashboard?: Maybe<Array<(
    { __typename?: 'Dashboard' }
    & DashboardFragment
  )>> }
);

export type FindManyDashboardCountQueryVariables = Exact<{
  where?: Maybe<DashboardWhereInput>;
  orderBy?: Maybe<DashboardOrderByInput>;
  cursor?: Maybe<DashboardWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyDashboardCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyDashboardCount'>
);

export type CreateOneDashboardMutationVariables = Exact<{
  data: DashboardCreateInput;
}>;


export type CreateOneDashboardMutation = (
  { __typename?: 'Mutation' }
  & { createOneDashboard: (
    { __typename?: 'Dashboard' }
    & DashboardFragment
  ) }
);

export type UpdateOneDashboardMutationVariables = Exact<{
  where: DashboardWhereUniqueInput;
  data: DashboardUpdateInput;
}>;


export type UpdateOneDashboardMutation = (
  { __typename?: 'Mutation' }
  & { updateOneDashboard: (
    { __typename?: 'Dashboard' }
    & DashboardFragment
  ) }
);

export type DeleteOneDashboardMutationVariables = Exact<{
  where: DashboardWhereUniqueInput;
}>;


export type DeleteOneDashboardMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneDashboard?: Maybe<(
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id'>
  )> }
);

export type GroupFieldsFragment = (
  { __typename?: 'Group' }
  & Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
);

export type GroupFragment = (
  { __typename?: 'Group' }
  & GroupFieldsFragment
);

export type FindOneGroupQueryVariables = Exact<{
  where: GroupWhereUniqueInput;
}>;


export type FindOneGroupQuery = (
  { __typename?: 'Query' }
  & { findOneGroup?: Maybe<(
    { __typename?: 'Group' }
    & GroupFragment
  )> }
);

export type FindManyGroupQueryVariables = Exact<{
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyGroupQuery = (
  { __typename?: 'Query' }
  & { findManyGroup?: Maybe<Array<(
    { __typename?: 'Group' }
    & GroupFragment
  )>> }
);

export type FindManyGroupCountQueryVariables = Exact<{
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyGroupCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyGroupCount'>
);

export type CreateOneGroupMutationVariables = Exact<{
  data: GroupCreateInput;
}>;


export type CreateOneGroupMutation = (
  { __typename?: 'Mutation' }
  & { createOneGroup: (
    { __typename?: 'Group' }
    & GroupFragment
  ) }
);

export type UpdateOneGroupMutationVariables = Exact<{
  where: GroupWhereUniqueInput;
  data: GroupUpdateInput;
}>;


export type UpdateOneGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateOneGroup: (
    { __typename?: 'Group' }
    & GroupFragment
  ) }
);

export type DeleteOneGroupMutationVariables = Exact<{
  where: GroupWhereUniqueInput;
}>;


export type DeleteOneGroupMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneGroup?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id'>
  )> }
);

export type JobFieldsFragment = (
  { __typename?: 'Job' }
  & Pick<Job, 'id' | 'name' | 'joid' | 'createdAt' | 'updatedAt' | 'jobType'>
);

export type JobFragment = (
  { __typename?: 'Job' }
  & JobFieldsFragment
);

export type FindOneJobQueryVariables = Exact<{
  where: JobWhereUniqueInput;
}>;


export type FindOneJobQuery = (
  { __typename?: 'Query' }
  & { findOneJob?: Maybe<(
    { __typename?: 'Job' }
    & JobFragment
  )> }
);

export type FindManyJobQueryVariables = Exact<{
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  cursor?: Maybe<JobWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyJobQuery = (
  { __typename?: 'Query' }
  & { findManyJob?: Maybe<Array<(
    { __typename?: 'Job' }
    & JobFragment
  )>> }
);

export type FindManyJobCountQueryVariables = Exact<{
  where?: Maybe<JobWhereInput>;
  orderBy?: Maybe<JobOrderByInput>;
  cursor?: Maybe<JobWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyJobCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyJobCount'>
);

export type CreateOneJobMutationVariables = Exact<{
  data: JobCreateInput;
}>;


export type CreateOneJobMutation = (
  { __typename?: 'Mutation' }
  & { createOneJob: (
    { __typename?: 'Job' }
    & JobFragment
  ) }
);

export type UpdateOneJobMutationVariables = Exact<{
  where: JobWhereUniqueInput;
  data: JobUpdateInput;
}>;


export type UpdateOneJobMutation = (
  { __typename?: 'Mutation' }
  & { updateOneJob: (
    { __typename?: 'Job' }
    & JobFragment
  ) }
);

export type DeleteOneJobMutationVariables = Exact<{
  where: JobWhereUniqueInput;
}>;


export type DeleteOneJobMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneJob?: Maybe<(
    { __typename?: 'Job' }
    & Pick<Job, 'id'>
  )> }
);

export type JobRunFieldsFragment = (
  { __typename?: 'JobRun' }
  & Pick<JobRun, 'id' | 'joid' | 'jobRunId' | 'createdAt' | 'updatedAt' | 'startTime' | 'endTime' | 'status' | 'jobId' | 'exitCode' | 'moreInfo'>
);

export type JobRunFragment = (
  { __typename?: 'JobRun' }
  & { job: (
    { __typename?: 'Job' }
    & JobFieldsFragment
  ) }
  & JobRunFieldsFragment
);

export type FindOneJobRunQueryVariables = Exact<{
  where: JobRunWhereUniqueInput;
}>;


export type FindOneJobRunQuery = (
  { __typename?: 'Query' }
  & { findOneJobRun?: Maybe<(
    { __typename?: 'JobRun' }
    & JobRunFragment
  )> }
);

export type FindManyJobRunQueryVariables = Exact<{
  where?: Maybe<JobRunWhereInput>;
  orderBy?: Maybe<JobRunOrderByInput>;
  cursor?: Maybe<JobRunWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyJobRunQuery = (
  { __typename?: 'Query' }
  & { findManyJobRun?: Maybe<Array<(
    { __typename?: 'JobRun' }
    & JobRunFragment
  )>> }
);

export type FindManyJobRunCountQueryVariables = Exact<{
  where?: Maybe<JobRunWhereInput>;
  orderBy?: Maybe<JobRunOrderByInput>;
  cursor?: Maybe<JobRunWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyJobRunCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyJobRunCount'>
);

export type CreateOneJobRunMutationVariables = Exact<{
  data: JobRunCreateInput;
}>;


export type CreateOneJobRunMutation = (
  { __typename?: 'Mutation' }
  & { createOneJobRun: (
    { __typename?: 'JobRun' }
    & JobRunFragment
  ) }
);

export type UpdateOneJobRunMutationVariables = Exact<{
  where: JobRunWhereUniqueInput;
  data: JobRunUpdateInput;
}>;


export type UpdateOneJobRunMutation = (
  { __typename?: 'Mutation' }
  & { updateOneJobRun: (
    { __typename?: 'JobRun' }
    & JobRunFragment
  ) }
);

export type DeleteOneJobRunMutationVariables = Exact<{
  where: JobRunWhereUniqueInput;
}>;


export type DeleteOneJobRunMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneJobRun?: Maybe<(
    { __typename?: 'JobRun' }
    & Pick<JobRun, 'id'>
  )> }
);

export type JournalEntryFieldsFragment = (
  { __typename?: 'JournalEntry' }
  & Pick<JournalEntry, 'id' | 'entry' | 'stepId'>
);

export type JournalEntryFragment = (
  { __typename?: 'JournalEntry' }
  & { step: (
    { __typename?: 'Step' }
    & StepFieldsFragment
  ) }
  & JournalEntryFieldsFragment
);

export type FindOneJournalEntryQueryVariables = Exact<{
  where: JournalEntryWhereUniqueInput;
}>;


export type FindOneJournalEntryQuery = (
  { __typename?: 'Query' }
  & { findOneJournalEntry?: Maybe<(
    { __typename?: 'JournalEntry' }
    & JournalEntryFragment
  )> }
);

export type FindManyJournalEntryQueryVariables = Exact<{
  where?: Maybe<JournalEntryWhereInput>;
  orderBy?: Maybe<JournalEntryOrderByInput>;
  cursor?: Maybe<JournalEntryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyJournalEntryQuery = (
  { __typename?: 'Query' }
  & { findManyJournalEntry?: Maybe<Array<(
    { __typename?: 'JournalEntry' }
    & JournalEntryFragment
  )>> }
);

export type FindManyJournalEntryCountQueryVariables = Exact<{
  where?: Maybe<JournalEntryWhereInput>;
  orderBy?: Maybe<JournalEntryOrderByInput>;
  cursor?: Maybe<JournalEntryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyJournalEntryCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyJournalEntryCount'>
);

export type CreateOneJournalEntryMutationVariables = Exact<{
  data: JournalEntryCreateInput;
}>;


export type CreateOneJournalEntryMutation = (
  { __typename?: 'Mutation' }
  & { createOneJournalEntry: (
    { __typename?: 'JournalEntry' }
    & JournalEntryFragment
  ) }
);

export type UpdateOneJournalEntryMutationVariables = Exact<{
  where: JournalEntryWhereUniqueInput;
  data: JournalEntryUpdateInput;
}>;


export type UpdateOneJournalEntryMutation = (
  { __typename?: 'Mutation' }
  & { updateOneJournalEntry: (
    { __typename?: 'JournalEntry' }
    & JournalEntryFragment
  ) }
);

export type DeleteOneJournalEntryMutationVariables = Exact<{
  where: JournalEntryWhereUniqueInput;
}>;


export type DeleteOneJournalEntryMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneJournalEntry?: Maybe<(
    { __typename?: 'JournalEntry' }
    & Pick<JournalEntry, 'id'>
  )> }
);

export type SectionFieldsFragment = (
  { __typename?: 'Section' }
  & Pick<Section, 'id' | 'name' | 'createdAt' | 'updatedAt' | 'published' | 'order' | 'successCriteria' | 'dashboardId'>
);

export type SectionFragment = (
  { __typename?: 'Section' }
  & { dashboard?: Maybe<(
    { __typename?: 'Dashboard' }
    & DashboardFieldsFragment
  )> }
  & SectionFieldsFragment
);

export type FindOneSectionQueryVariables = Exact<{
  where: SectionWhereUniqueInput;
}>;


export type FindOneSectionQuery = (
  { __typename?: 'Query' }
  & { findOneSection?: Maybe<(
    { __typename?: 'Section' }
    & SectionFragment
  )> }
);

export type FindManySectionQueryVariables = Exact<{
  where?: Maybe<SectionWhereInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  cursor?: Maybe<SectionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManySectionQuery = (
  { __typename?: 'Query' }
  & { findManySection?: Maybe<Array<(
    { __typename?: 'Section' }
    & SectionFragment
  )>> }
);

export type FindManySectionCountQueryVariables = Exact<{
  where?: Maybe<SectionWhereInput>;
  orderBy?: Maybe<SectionOrderByInput>;
  cursor?: Maybe<SectionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManySectionCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManySectionCount'>
);

export type CreateOneSectionMutationVariables = Exact<{
  data: SectionCreateInput;
}>;


export type CreateOneSectionMutation = (
  { __typename?: 'Mutation' }
  & { createOneSection: (
    { __typename?: 'Section' }
    & SectionFragment
  ) }
);

export type UpdateOneSectionMutationVariables = Exact<{
  where: SectionWhereUniqueInput;
  data: SectionUpdateInput;
}>;


export type UpdateOneSectionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneSection: (
    { __typename?: 'Section' }
    & SectionFragment
  ) }
);

export type DeleteOneSectionMutationVariables = Exact<{
  where: SectionWhereUniqueInput;
}>;


export type DeleteOneSectionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneSection?: Maybe<(
    { __typename?: 'Section' }
    & Pick<Section, 'id'>
  )> }
);

export type StepFieldsFragment = (
  { __typename?: 'Step' }
  & Pick<Step, 'id' | 'name' | 'createdAt' | 'updatedAt' | 'jobId' | 'order' | 'successCriteria' | 'sectionId'>
);

export type StepFragment = (
  { __typename?: 'Step' }
  & { job: (
    { __typename?: 'Job' }
    & JobFieldsFragment
  ), section: (
    { __typename?: 'Section' }
    & SectionFieldsFragment
  ) }
  & StepFieldsFragment
);

export type FindOneStepQueryVariables = Exact<{
  where: StepWhereUniqueInput;
}>;


export type FindOneStepQuery = (
  { __typename?: 'Query' }
  & { findOneStep?: Maybe<(
    { __typename?: 'Step' }
    & StepFragment
  )> }
);

export type FindManyStepQueryVariables = Exact<{
  where?: Maybe<StepWhereInput>;
  orderBy?: Maybe<StepOrderByInput>;
  cursor?: Maybe<StepWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyStepQuery = (
  { __typename?: 'Query' }
  & { findManyStep?: Maybe<Array<(
    { __typename?: 'Step' }
    & StepFragment
  )>> }
);

export type FindManyStepCountQueryVariables = Exact<{
  where?: Maybe<StepWhereInput>;
  orderBy?: Maybe<StepOrderByInput>;
  cursor?: Maybe<StepWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyStepCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyStepCount'>
);

export type CreateOneStepMutationVariables = Exact<{
  data: StepCreateInput;
}>;


export type CreateOneStepMutation = (
  { __typename?: 'Mutation' }
  & { createOneStep: (
    { __typename?: 'Step' }
    & StepFragment
  ) }
);

export type UpdateOneStepMutationVariables = Exact<{
  where: StepWhereUniqueInput;
  data: StepUpdateInput;
}>;


export type UpdateOneStepMutation = (
  { __typename?: 'Mutation' }
  & { updateOneStep: (
    { __typename?: 'Step' }
    & StepFragment
  ) }
);

export type DeleteOneStepMutationVariables = Exact<{
  where: StepWhereUniqueInput;
}>;


export type DeleteOneStepMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneStep?: Maybe<(
    { __typename?: 'Step' }
    & Pick<Step, 'id'>
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'createdAt' | 'email' | 'name' | 'password' | 'groupId'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & GroupFieldsFragment
  )> }
  & UserFieldsFragment
);

export type FindOneUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FindOneUserQuery = (
  { __typename?: 'Query' }
  & { findOneUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type FindManyUserQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserQuery = (
  { __typename?: 'Query' }
  & { findManyUser?: Maybe<Array<(
    { __typename?: 'User' }
    & UserFragment
  )>> }
);

export type FindManyUserCountQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyUserCount'>
);

export type CreateOneUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { createOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type UpdateOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type DeleteOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteOneUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export const DashboardFieldsFragmentDoc = gql`
    fragment DashboardFields on Dashboard {
  id
  name
  createdAt
  updatedAt
  published
  minuteOffset
}
    `;
export const DashboardFragmentDoc = gql`
    fragment Dashboard on Dashboard {
  ...DashboardFields
}
    ${DashboardFieldsFragmentDoc}`;
export const GroupFieldsFragmentDoc = gql`
    fragment GroupFields on Group {
  id
  name
  createdAt
  updatedAt
}
    `;
export const GroupFragmentDoc = gql`
    fragment Group on Group {
  ...GroupFields
}
    ${GroupFieldsFragmentDoc}`;
export const JobFieldsFragmentDoc = gql`
    fragment JobFields on Job {
  id
  name
  joid
  createdAt
  updatedAt
  jobType
}
    `;
export const JobFragmentDoc = gql`
    fragment Job on Job {
  ...JobFields
}
    ${JobFieldsFragmentDoc}`;
export const JobRunFieldsFragmentDoc = gql`
    fragment JobRunFields on JobRun {
  id
  joid
  jobRunId
  createdAt
  updatedAt
  startTime
  endTime
  status
  jobId
  exitCode
  moreInfo
}
    `;
export const JobRunFragmentDoc = gql`
    fragment JobRun on JobRun {
  ...JobRunFields
  job {
    ...JobFields
  }
}
    ${JobRunFieldsFragmentDoc}
${JobFieldsFragmentDoc}`;
export const JournalEntryFieldsFragmentDoc = gql`
    fragment JournalEntryFields on JournalEntry {
  id
  entry
  stepId
}
    `;
export const StepFieldsFragmentDoc = gql`
    fragment StepFields on Step {
  id
  name
  createdAt
  updatedAt
  jobId
  order
  successCriteria
  sectionId
}
    `;
export const JournalEntryFragmentDoc = gql`
    fragment JournalEntry on JournalEntry {
  ...JournalEntryFields
  step {
    ...StepFields
  }
}
    ${JournalEntryFieldsFragmentDoc}
${StepFieldsFragmentDoc}`;
export const SectionFieldsFragmentDoc = gql`
    fragment SectionFields on Section {
  id
  name
  createdAt
  updatedAt
  published
  order
  successCriteria
  dashboardId
}
    `;
export const SectionFragmentDoc = gql`
    fragment Section on Section {
  ...SectionFields
  dashboard {
    ...DashboardFields
  }
}
    ${SectionFieldsFragmentDoc}
${DashboardFieldsFragmentDoc}`;
export const StepFragmentDoc = gql`
    fragment Step on Step {
  ...StepFields
  job {
    ...JobFields
  }
  section {
    ...SectionFields
  }
}
    ${StepFieldsFragmentDoc}
${JobFieldsFragmentDoc}
${SectionFieldsFragmentDoc}`;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  createdAt
  email
  name
  password
  groupId
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  ...UserFields
  group {
    ...GroupFields
  }
}
    ${UserFieldsFragmentDoc}
${GroupFieldsFragmentDoc}`;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($email: String!, $password: String!, $name: String) {
  signup(email: $email, password: $password, name: $name) {
    id
  }
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const FindOneDashboardDocument = gql`
    query findOneDashboard($where: DashboardWhereUniqueInput!) {
  findOneDashboard(where: $where) {
    ...Dashboard
  }
}
    ${DashboardFragmentDoc}`;

/**
 * __useFindOneDashboardQuery__
 *
 * To run a query within a React component, call `useFindOneDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneDashboardQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneDashboardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneDashboardQuery, FindOneDashboardQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneDashboardQuery, FindOneDashboardQueryVariables>(FindOneDashboardDocument, baseOptions);
      }
export function useFindOneDashboardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneDashboardQuery, FindOneDashboardQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneDashboardQuery, FindOneDashboardQueryVariables>(FindOneDashboardDocument, baseOptions);
        }
export type FindOneDashboardQueryHookResult = ReturnType<typeof useFindOneDashboardQuery>;
export type FindOneDashboardLazyQueryHookResult = ReturnType<typeof useFindOneDashboardLazyQuery>;
export type FindOneDashboardQueryResult = ApolloReactCommon.QueryResult<FindOneDashboardQuery, FindOneDashboardQueryVariables>;
export const FindManyDashboardDocument = gql`
    query findManyDashboard($where: DashboardWhereInput, $orderBy: DashboardOrderByInput, $cursor: DashboardWhereUniqueInput, $skip: Int, $take: Int) {
  findManyDashboard(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Dashboard
  }
}
    ${DashboardFragmentDoc}`;

/**
 * __useFindManyDashboardQuery__
 *
 * To run a query within a React component, call `useFindManyDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyDashboardQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyDashboardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyDashboardQuery, FindManyDashboardQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyDashboardQuery, FindManyDashboardQueryVariables>(FindManyDashboardDocument, baseOptions);
      }
export function useFindManyDashboardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyDashboardQuery, FindManyDashboardQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyDashboardQuery, FindManyDashboardQueryVariables>(FindManyDashboardDocument, baseOptions);
        }
export type FindManyDashboardQueryHookResult = ReturnType<typeof useFindManyDashboardQuery>;
export type FindManyDashboardLazyQueryHookResult = ReturnType<typeof useFindManyDashboardLazyQuery>;
export type FindManyDashboardQueryResult = ApolloReactCommon.QueryResult<FindManyDashboardQuery, FindManyDashboardQueryVariables>;
export const FindManyDashboardCountDocument = gql`
    query findManyDashboardCount($where: DashboardWhereInput, $orderBy: DashboardOrderByInput, $cursor: DashboardWhereUniqueInput, $skip: Int, $take: Int) {
  findManyDashboardCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyDashboardCountQuery__
 *
 * To run a query within a React component, call `useFindManyDashboardCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyDashboardCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyDashboardCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyDashboardCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyDashboardCountQuery, FindManyDashboardCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyDashboardCountQuery, FindManyDashboardCountQueryVariables>(FindManyDashboardCountDocument, baseOptions);
      }
export function useFindManyDashboardCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyDashboardCountQuery, FindManyDashboardCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyDashboardCountQuery, FindManyDashboardCountQueryVariables>(FindManyDashboardCountDocument, baseOptions);
        }
export type FindManyDashboardCountQueryHookResult = ReturnType<typeof useFindManyDashboardCountQuery>;
export type FindManyDashboardCountLazyQueryHookResult = ReturnType<typeof useFindManyDashboardCountLazyQuery>;
export type FindManyDashboardCountQueryResult = ApolloReactCommon.QueryResult<FindManyDashboardCountQuery, FindManyDashboardCountQueryVariables>;
export const CreateOneDashboardDocument = gql`
    mutation createOneDashboard($data: DashboardCreateInput!) {
  createOneDashboard(data: $data) {
    ...Dashboard
  }
}
    ${DashboardFragmentDoc}`;

/**
 * __useCreateOneDashboardMutation__
 *
 * To run a mutation, you first call `useCreateOneDashboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneDashboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneDashboardMutation, { data, loading, error }] = useCreateOneDashboardMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneDashboardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneDashboardMutation, CreateOneDashboardMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneDashboardMutation, CreateOneDashboardMutationVariables>(CreateOneDashboardDocument, baseOptions);
      }
export type CreateOneDashboardMutationHookResult = ReturnType<typeof useCreateOneDashboardMutation>;
export type CreateOneDashboardMutationResult = ApolloReactCommon.MutationResult<CreateOneDashboardMutation>;
export type CreateOneDashboardMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneDashboardMutation, CreateOneDashboardMutationVariables>;
export const UpdateOneDashboardDocument = gql`
    mutation updateOneDashboard($where: DashboardWhereUniqueInput!, $data: DashboardUpdateInput!) {
  updateOneDashboard(where: $where, data: $data) {
    ...Dashboard
  }
}
    ${DashboardFragmentDoc}`;

/**
 * __useUpdateOneDashboardMutation__
 *
 * To run a mutation, you first call `useUpdateOneDashboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneDashboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneDashboardMutation, { data, loading, error }] = useUpdateOneDashboardMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneDashboardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneDashboardMutation, UpdateOneDashboardMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneDashboardMutation, UpdateOneDashboardMutationVariables>(UpdateOneDashboardDocument, baseOptions);
      }
export type UpdateOneDashboardMutationHookResult = ReturnType<typeof useUpdateOneDashboardMutation>;
export type UpdateOneDashboardMutationResult = ApolloReactCommon.MutationResult<UpdateOneDashboardMutation>;
export type UpdateOneDashboardMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneDashboardMutation, UpdateOneDashboardMutationVariables>;
export const DeleteOneDashboardDocument = gql`
    mutation deleteOneDashboard($where: DashboardWhereUniqueInput!) {
  deleteOneDashboard(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneDashboardMutation__
 *
 * To run a mutation, you first call `useDeleteOneDashboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneDashboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneDashboardMutation, { data, loading, error }] = useDeleteOneDashboardMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneDashboardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneDashboardMutation, DeleteOneDashboardMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneDashboardMutation, DeleteOneDashboardMutationVariables>(DeleteOneDashboardDocument, baseOptions);
      }
export type DeleteOneDashboardMutationHookResult = ReturnType<typeof useDeleteOneDashboardMutation>;
export type DeleteOneDashboardMutationResult = ApolloReactCommon.MutationResult<DeleteOneDashboardMutation>;
export type DeleteOneDashboardMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneDashboardMutation, DeleteOneDashboardMutationVariables>;
export const FindOneGroupDocument = gql`
    query findOneGroup($where: GroupWhereUniqueInput!) {
  findOneGroup(where: $where) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useFindOneGroupQuery__
 *
 * To run a query within a React component, call `useFindOneGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneGroupQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneGroupQuery, FindOneGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneGroupQuery, FindOneGroupQueryVariables>(FindOneGroupDocument, baseOptions);
      }
export function useFindOneGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneGroupQuery, FindOneGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneGroupQuery, FindOneGroupQueryVariables>(FindOneGroupDocument, baseOptions);
        }
export type FindOneGroupQueryHookResult = ReturnType<typeof useFindOneGroupQuery>;
export type FindOneGroupLazyQueryHookResult = ReturnType<typeof useFindOneGroupLazyQuery>;
export type FindOneGroupQueryResult = ApolloReactCommon.QueryResult<FindOneGroupQuery, FindOneGroupQueryVariables>;
export const FindManyGroupDocument = gql`
    query findManyGroup($where: GroupWhereInput, $orderBy: GroupOrderByInput, $cursor: GroupWhereUniqueInput, $skip: Int, $take: Int) {
  findManyGroup(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useFindManyGroupQuery__
 *
 * To run a query within a React component, call `useFindManyGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyGroupQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyGroupQuery, FindManyGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyGroupQuery, FindManyGroupQueryVariables>(FindManyGroupDocument, baseOptions);
      }
export function useFindManyGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyGroupQuery, FindManyGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyGroupQuery, FindManyGroupQueryVariables>(FindManyGroupDocument, baseOptions);
        }
export type FindManyGroupQueryHookResult = ReturnType<typeof useFindManyGroupQuery>;
export type FindManyGroupLazyQueryHookResult = ReturnType<typeof useFindManyGroupLazyQuery>;
export type FindManyGroupQueryResult = ApolloReactCommon.QueryResult<FindManyGroupQuery, FindManyGroupQueryVariables>;
export const FindManyGroupCountDocument = gql`
    query findManyGroupCount($where: GroupWhereInput, $orderBy: GroupOrderByInput, $cursor: GroupWhereUniqueInput, $skip: Int, $take: Int) {
  findManyGroupCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyGroupCountQuery__
 *
 * To run a query within a React component, call `useFindManyGroupCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyGroupCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyGroupCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyGroupCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>(FindManyGroupCountDocument, baseOptions);
      }
export function useFindManyGroupCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>(FindManyGroupCountDocument, baseOptions);
        }
export type FindManyGroupCountQueryHookResult = ReturnType<typeof useFindManyGroupCountQuery>;
export type FindManyGroupCountLazyQueryHookResult = ReturnType<typeof useFindManyGroupCountLazyQuery>;
export type FindManyGroupCountQueryResult = ApolloReactCommon.QueryResult<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>;
export const CreateOneGroupDocument = gql`
    mutation createOneGroup($data: GroupCreateInput!) {
  createOneGroup(data: $data) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useCreateOneGroupMutation__
 *
 * To run a mutation, you first call `useCreateOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneGroupMutation, { data, loading, error }] = useCreateOneGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneGroupMutation, CreateOneGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneGroupMutation, CreateOneGroupMutationVariables>(CreateOneGroupDocument, baseOptions);
      }
export type CreateOneGroupMutationHookResult = ReturnType<typeof useCreateOneGroupMutation>;
export type CreateOneGroupMutationResult = ApolloReactCommon.MutationResult<CreateOneGroupMutation>;
export type CreateOneGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneGroupMutation, CreateOneGroupMutationVariables>;
export const UpdateOneGroupDocument = gql`
    mutation updateOneGroup($where: GroupWhereUniqueInput!, $data: GroupUpdateInput!) {
  updateOneGroup(where: $where, data: $data) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useUpdateOneGroupMutation__
 *
 * To run a mutation, you first call `useUpdateOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneGroupMutation, { data, loading, error }] = useUpdateOneGroupMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneGroupMutation, UpdateOneGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneGroupMutation, UpdateOneGroupMutationVariables>(UpdateOneGroupDocument, baseOptions);
      }
export type UpdateOneGroupMutationHookResult = ReturnType<typeof useUpdateOneGroupMutation>;
export type UpdateOneGroupMutationResult = ApolloReactCommon.MutationResult<UpdateOneGroupMutation>;
export type UpdateOneGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneGroupMutation, UpdateOneGroupMutationVariables>;
export const DeleteOneGroupDocument = gql`
    mutation deleteOneGroup($where: GroupWhereUniqueInput!) {
  deleteOneGroup(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneGroupMutation__
 *
 * To run a mutation, you first call `useDeleteOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneGroupMutation, { data, loading, error }] = useDeleteOneGroupMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneGroupMutation, DeleteOneGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneGroupMutation, DeleteOneGroupMutationVariables>(DeleteOneGroupDocument, baseOptions);
      }
export type DeleteOneGroupMutationHookResult = ReturnType<typeof useDeleteOneGroupMutation>;
export type DeleteOneGroupMutationResult = ApolloReactCommon.MutationResult<DeleteOneGroupMutation>;
export type DeleteOneGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneGroupMutation, DeleteOneGroupMutationVariables>;
export const FindOneJobDocument = gql`
    query findOneJob($where: JobWhereUniqueInput!) {
  findOneJob(where: $where) {
    ...Job
  }
}
    ${JobFragmentDoc}`;

/**
 * __useFindOneJobQuery__
 *
 * To run a query within a React component, call `useFindOneJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneJobQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneJobQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneJobQuery, FindOneJobQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneJobQuery, FindOneJobQueryVariables>(FindOneJobDocument, baseOptions);
      }
export function useFindOneJobLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneJobQuery, FindOneJobQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneJobQuery, FindOneJobQueryVariables>(FindOneJobDocument, baseOptions);
        }
export type FindOneJobQueryHookResult = ReturnType<typeof useFindOneJobQuery>;
export type FindOneJobLazyQueryHookResult = ReturnType<typeof useFindOneJobLazyQuery>;
export type FindOneJobQueryResult = ApolloReactCommon.QueryResult<FindOneJobQuery, FindOneJobQueryVariables>;
export const FindManyJobDocument = gql`
    query findManyJob($where: JobWhereInput, $orderBy: JobOrderByInput, $cursor: JobWhereUniqueInput, $skip: Int, $take: Int) {
  findManyJob(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Job
  }
}
    ${JobFragmentDoc}`;

/**
 * __useFindManyJobQuery__
 *
 * To run a query within a React component, call `useFindManyJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyJobQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyJobQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyJobQuery, FindManyJobQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyJobQuery, FindManyJobQueryVariables>(FindManyJobDocument, baseOptions);
      }
export function useFindManyJobLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyJobQuery, FindManyJobQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyJobQuery, FindManyJobQueryVariables>(FindManyJobDocument, baseOptions);
        }
export type FindManyJobQueryHookResult = ReturnType<typeof useFindManyJobQuery>;
export type FindManyJobLazyQueryHookResult = ReturnType<typeof useFindManyJobLazyQuery>;
export type FindManyJobQueryResult = ApolloReactCommon.QueryResult<FindManyJobQuery, FindManyJobQueryVariables>;
export const FindManyJobCountDocument = gql`
    query findManyJobCount($where: JobWhereInput, $orderBy: JobOrderByInput, $cursor: JobWhereUniqueInput, $skip: Int, $take: Int) {
  findManyJobCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyJobCountQuery__
 *
 * To run a query within a React component, call `useFindManyJobCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyJobCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyJobCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyJobCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyJobCountQuery, FindManyJobCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyJobCountQuery, FindManyJobCountQueryVariables>(FindManyJobCountDocument, baseOptions);
      }
export function useFindManyJobCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyJobCountQuery, FindManyJobCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyJobCountQuery, FindManyJobCountQueryVariables>(FindManyJobCountDocument, baseOptions);
        }
export type FindManyJobCountQueryHookResult = ReturnType<typeof useFindManyJobCountQuery>;
export type FindManyJobCountLazyQueryHookResult = ReturnType<typeof useFindManyJobCountLazyQuery>;
export type FindManyJobCountQueryResult = ApolloReactCommon.QueryResult<FindManyJobCountQuery, FindManyJobCountQueryVariables>;
export const CreateOneJobDocument = gql`
    mutation createOneJob($data: JobCreateInput!) {
  createOneJob(data: $data) {
    ...Job
  }
}
    ${JobFragmentDoc}`;

/**
 * __useCreateOneJobMutation__
 *
 * To run a mutation, you first call `useCreateOneJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneJobMutation, { data, loading, error }] = useCreateOneJobMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneJobMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneJobMutation, CreateOneJobMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneJobMutation, CreateOneJobMutationVariables>(CreateOneJobDocument, baseOptions);
      }
export type CreateOneJobMutationHookResult = ReturnType<typeof useCreateOneJobMutation>;
export type CreateOneJobMutationResult = ApolloReactCommon.MutationResult<CreateOneJobMutation>;
export type CreateOneJobMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneJobMutation, CreateOneJobMutationVariables>;
export const UpdateOneJobDocument = gql`
    mutation updateOneJob($where: JobWhereUniqueInput!, $data: JobUpdateInput!) {
  updateOneJob(where: $where, data: $data) {
    ...Job
  }
}
    ${JobFragmentDoc}`;

/**
 * __useUpdateOneJobMutation__
 *
 * To run a mutation, you first call `useUpdateOneJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneJobMutation, { data, loading, error }] = useUpdateOneJobMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneJobMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneJobMutation, UpdateOneJobMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneJobMutation, UpdateOneJobMutationVariables>(UpdateOneJobDocument, baseOptions);
      }
export type UpdateOneJobMutationHookResult = ReturnType<typeof useUpdateOneJobMutation>;
export type UpdateOneJobMutationResult = ApolloReactCommon.MutationResult<UpdateOneJobMutation>;
export type UpdateOneJobMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneJobMutation, UpdateOneJobMutationVariables>;
export const DeleteOneJobDocument = gql`
    mutation deleteOneJob($where: JobWhereUniqueInput!) {
  deleteOneJob(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneJobMutation__
 *
 * To run a mutation, you first call `useDeleteOneJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneJobMutation, { data, loading, error }] = useDeleteOneJobMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneJobMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneJobMutation, DeleteOneJobMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneJobMutation, DeleteOneJobMutationVariables>(DeleteOneJobDocument, baseOptions);
      }
export type DeleteOneJobMutationHookResult = ReturnType<typeof useDeleteOneJobMutation>;
export type DeleteOneJobMutationResult = ApolloReactCommon.MutationResult<DeleteOneJobMutation>;
export type DeleteOneJobMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneJobMutation, DeleteOneJobMutationVariables>;
export const FindOneJobRunDocument = gql`
    query findOneJobRun($where: JobRunWhereUniqueInput!) {
  findOneJobRun(where: $where) {
    ...JobRun
  }
}
    ${JobRunFragmentDoc}`;

/**
 * __useFindOneJobRunQuery__
 *
 * To run a query within a React component, call `useFindOneJobRunQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneJobRunQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneJobRunQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneJobRunQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneJobRunQuery, FindOneJobRunQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneJobRunQuery, FindOneJobRunQueryVariables>(FindOneJobRunDocument, baseOptions);
      }
export function useFindOneJobRunLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneJobRunQuery, FindOneJobRunQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneJobRunQuery, FindOneJobRunQueryVariables>(FindOneJobRunDocument, baseOptions);
        }
export type FindOneJobRunQueryHookResult = ReturnType<typeof useFindOneJobRunQuery>;
export type FindOneJobRunLazyQueryHookResult = ReturnType<typeof useFindOneJobRunLazyQuery>;
export type FindOneJobRunQueryResult = ApolloReactCommon.QueryResult<FindOneJobRunQuery, FindOneJobRunQueryVariables>;
export const FindManyJobRunDocument = gql`
    query findManyJobRun($where: JobRunWhereInput, $orderBy: JobRunOrderByInput, $cursor: JobRunWhereUniqueInput, $skip: Int, $take: Int) {
  findManyJobRun(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...JobRun
  }
}
    ${JobRunFragmentDoc}`;

/**
 * __useFindManyJobRunQuery__
 *
 * To run a query within a React component, call `useFindManyJobRunQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyJobRunQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyJobRunQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyJobRunQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyJobRunQuery, FindManyJobRunQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyJobRunQuery, FindManyJobRunQueryVariables>(FindManyJobRunDocument, baseOptions);
      }
export function useFindManyJobRunLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyJobRunQuery, FindManyJobRunQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyJobRunQuery, FindManyJobRunQueryVariables>(FindManyJobRunDocument, baseOptions);
        }
export type FindManyJobRunQueryHookResult = ReturnType<typeof useFindManyJobRunQuery>;
export type FindManyJobRunLazyQueryHookResult = ReturnType<typeof useFindManyJobRunLazyQuery>;
export type FindManyJobRunQueryResult = ApolloReactCommon.QueryResult<FindManyJobRunQuery, FindManyJobRunQueryVariables>;
export const FindManyJobRunCountDocument = gql`
    query findManyJobRunCount($where: JobRunWhereInput, $orderBy: JobRunOrderByInput, $cursor: JobRunWhereUniqueInput, $skip: Int, $take: Int) {
  findManyJobRunCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyJobRunCountQuery__
 *
 * To run a query within a React component, call `useFindManyJobRunCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyJobRunCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyJobRunCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyJobRunCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyJobRunCountQuery, FindManyJobRunCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyJobRunCountQuery, FindManyJobRunCountQueryVariables>(FindManyJobRunCountDocument, baseOptions);
      }
export function useFindManyJobRunCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyJobRunCountQuery, FindManyJobRunCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyJobRunCountQuery, FindManyJobRunCountQueryVariables>(FindManyJobRunCountDocument, baseOptions);
        }
export type FindManyJobRunCountQueryHookResult = ReturnType<typeof useFindManyJobRunCountQuery>;
export type FindManyJobRunCountLazyQueryHookResult = ReturnType<typeof useFindManyJobRunCountLazyQuery>;
export type FindManyJobRunCountQueryResult = ApolloReactCommon.QueryResult<FindManyJobRunCountQuery, FindManyJobRunCountQueryVariables>;
export const CreateOneJobRunDocument = gql`
    mutation createOneJobRun($data: JobRunCreateInput!) {
  createOneJobRun(data: $data) {
    ...JobRun
  }
}
    ${JobRunFragmentDoc}`;

/**
 * __useCreateOneJobRunMutation__
 *
 * To run a mutation, you first call `useCreateOneJobRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneJobRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneJobRunMutation, { data, loading, error }] = useCreateOneJobRunMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneJobRunMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneJobRunMutation, CreateOneJobRunMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneJobRunMutation, CreateOneJobRunMutationVariables>(CreateOneJobRunDocument, baseOptions);
      }
export type CreateOneJobRunMutationHookResult = ReturnType<typeof useCreateOneJobRunMutation>;
export type CreateOneJobRunMutationResult = ApolloReactCommon.MutationResult<CreateOneJobRunMutation>;
export type CreateOneJobRunMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneJobRunMutation, CreateOneJobRunMutationVariables>;
export const UpdateOneJobRunDocument = gql`
    mutation updateOneJobRun($where: JobRunWhereUniqueInput!, $data: JobRunUpdateInput!) {
  updateOneJobRun(where: $where, data: $data) {
    ...JobRun
  }
}
    ${JobRunFragmentDoc}`;

/**
 * __useUpdateOneJobRunMutation__
 *
 * To run a mutation, you first call `useUpdateOneJobRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneJobRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneJobRunMutation, { data, loading, error }] = useUpdateOneJobRunMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneJobRunMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneJobRunMutation, UpdateOneJobRunMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneJobRunMutation, UpdateOneJobRunMutationVariables>(UpdateOneJobRunDocument, baseOptions);
      }
export type UpdateOneJobRunMutationHookResult = ReturnType<typeof useUpdateOneJobRunMutation>;
export type UpdateOneJobRunMutationResult = ApolloReactCommon.MutationResult<UpdateOneJobRunMutation>;
export type UpdateOneJobRunMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneJobRunMutation, UpdateOneJobRunMutationVariables>;
export const DeleteOneJobRunDocument = gql`
    mutation deleteOneJobRun($where: JobRunWhereUniqueInput!) {
  deleteOneJobRun(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneJobRunMutation__
 *
 * To run a mutation, you first call `useDeleteOneJobRunMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneJobRunMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneJobRunMutation, { data, loading, error }] = useDeleteOneJobRunMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneJobRunMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneJobRunMutation, DeleteOneJobRunMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneJobRunMutation, DeleteOneJobRunMutationVariables>(DeleteOneJobRunDocument, baseOptions);
      }
export type DeleteOneJobRunMutationHookResult = ReturnType<typeof useDeleteOneJobRunMutation>;
export type DeleteOneJobRunMutationResult = ApolloReactCommon.MutationResult<DeleteOneJobRunMutation>;
export type DeleteOneJobRunMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneJobRunMutation, DeleteOneJobRunMutationVariables>;
export const FindOneJournalEntryDocument = gql`
    query findOneJournalEntry($where: JournalEntryWhereUniqueInput!) {
  findOneJournalEntry(where: $where) {
    ...JournalEntry
  }
}
    ${JournalEntryFragmentDoc}`;

/**
 * __useFindOneJournalEntryQuery__
 *
 * To run a query within a React component, call `useFindOneJournalEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneJournalEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneJournalEntryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneJournalEntryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneJournalEntryQuery, FindOneJournalEntryQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneJournalEntryQuery, FindOneJournalEntryQueryVariables>(FindOneJournalEntryDocument, baseOptions);
      }
export function useFindOneJournalEntryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneJournalEntryQuery, FindOneJournalEntryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneJournalEntryQuery, FindOneJournalEntryQueryVariables>(FindOneJournalEntryDocument, baseOptions);
        }
export type FindOneJournalEntryQueryHookResult = ReturnType<typeof useFindOneJournalEntryQuery>;
export type FindOneJournalEntryLazyQueryHookResult = ReturnType<typeof useFindOneJournalEntryLazyQuery>;
export type FindOneJournalEntryQueryResult = ApolloReactCommon.QueryResult<FindOneJournalEntryQuery, FindOneJournalEntryQueryVariables>;
export const FindManyJournalEntryDocument = gql`
    query findManyJournalEntry($where: JournalEntryWhereInput, $orderBy: JournalEntryOrderByInput, $cursor: JournalEntryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyJournalEntry(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...JournalEntry
  }
}
    ${JournalEntryFragmentDoc}`;

/**
 * __useFindManyJournalEntryQuery__
 *
 * To run a query within a React component, call `useFindManyJournalEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyJournalEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyJournalEntryQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyJournalEntryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyJournalEntryQuery, FindManyJournalEntryQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyJournalEntryQuery, FindManyJournalEntryQueryVariables>(FindManyJournalEntryDocument, baseOptions);
      }
export function useFindManyJournalEntryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyJournalEntryQuery, FindManyJournalEntryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyJournalEntryQuery, FindManyJournalEntryQueryVariables>(FindManyJournalEntryDocument, baseOptions);
        }
export type FindManyJournalEntryQueryHookResult = ReturnType<typeof useFindManyJournalEntryQuery>;
export type FindManyJournalEntryLazyQueryHookResult = ReturnType<typeof useFindManyJournalEntryLazyQuery>;
export type FindManyJournalEntryQueryResult = ApolloReactCommon.QueryResult<FindManyJournalEntryQuery, FindManyJournalEntryQueryVariables>;
export const FindManyJournalEntryCountDocument = gql`
    query findManyJournalEntryCount($where: JournalEntryWhereInput, $orderBy: JournalEntryOrderByInput, $cursor: JournalEntryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyJournalEntryCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyJournalEntryCountQuery__
 *
 * To run a query within a React component, call `useFindManyJournalEntryCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyJournalEntryCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyJournalEntryCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyJournalEntryCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyJournalEntryCountQuery, FindManyJournalEntryCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyJournalEntryCountQuery, FindManyJournalEntryCountQueryVariables>(FindManyJournalEntryCountDocument, baseOptions);
      }
export function useFindManyJournalEntryCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyJournalEntryCountQuery, FindManyJournalEntryCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyJournalEntryCountQuery, FindManyJournalEntryCountQueryVariables>(FindManyJournalEntryCountDocument, baseOptions);
        }
export type FindManyJournalEntryCountQueryHookResult = ReturnType<typeof useFindManyJournalEntryCountQuery>;
export type FindManyJournalEntryCountLazyQueryHookResult = ReturnType<typeof useFindManyJournalEntryCountLazyQuery>;
export type FindManyJournalEntryCountQueryResult = ApolloReactCommon.QueryResult<FindManyJournalEntryCountQuery, FindManyJournalEntryCountQueryVariables>;
export const CreateOneJournalEntryDocument = gql`
    mutation createOneJournalEntry($data: JournalEntryCreateInput!) {
  createOneJournalEntry(data: $data) {
    ...JournalEntry
  }
}
    ${JournalEntryFragmentDoc}`;

/**
 * __useCreateOneJournalEntryMutation__
 *
 * To run a mutation, you first call `useCreateOneJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneJournalEntryMutation, { data, loading, error }] = useCreateOneJournalEntryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneJournalEntryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneJournalEntryMutation, CreateOneJournalEntryMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneJournalEntryMutation, CreateOneJournalEntryMutationVariables>(CreateOneJournalEntryDocument, baseOptions);
      }
export type CreateOneJournalEntryMutationHookResult = ReturnType<typeof useCreateOneJournalEntryMutation>;
export type CreateOneJournalEntryMutationResult = ApolloReactCommon.MutationResult<CreateOneJournalEntryMutation>;
export type CreateOneJournalEntryMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneJournalEntryMutation, CreateOneJournalEntryMutationVariables>;
export const UpdateOneJournalEntryDocument = gql`
    mutation updateOneJournalEntry($where: JournalEntryWhereUniqueInput!, $data: JournalEntryUpdateInput!) {
  updateOneJournalEntry(where: $where, data: $data) {
    ...JournalEntry
  }
}
    ${JournalEntryFragmentDoc}`;

/**
 * __useUpdateOneJournalEntryMutation__
 *
 * To run a mutation, you first call `useUpdateOneJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneJournalEntryMutation, { data, loading, error }] = useUpdateOneJournalEntryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneJournalEntryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneJournalEntryMutation, UpdateOneJournalEntryMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneJournalEntryMutation, UpdateOneJournalEntryMutationVariables>(UpdateOneJournalEntryDocument, baseOptions);
      }
export type UpdateOneJournalEntryMutationHookResult = ReturnType<typeof useUpdateOneJournalEntryMutation>;
export type UpdateOneJournalEntryMutationResult = ApolloReactCommon.MutationResult<UpdateOneJournalEntryMutation>;
export type UpdateOneJournalEntryMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneJournalEntryMutation, UpdateOneJournalEntryMutationVariables>;
export const DeleteOneJournalEntryDocument = gql`
    mutation deleteOneJournalEntry($where: JournalEntryWhereUniqueInput!) {
  deleteOneJournalEntry(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneJournalEntryMutation__
 *
 * To run a mutation, you first call `useDeleteOneJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneJournalEntryMutation, { data, loading, error }] = useDeleteOneJournalEntryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneJournalEntryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneJournalEntryMutation, DeleteOneJournalEntryMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneJournalEntryMutation, DeleteOneJournalEntryMutationVariables>(DeleteOneJournalEntryDocument, baseOptions);
      }
export type DeleteOneJournalEntryMutationHookResult = ReturnType<typeof useDeleteOneJournalEntryMutation>;
export type DeleteOneJournalEntryMutationResult = ApolloReactCommon.MutationResult<DeleteOneJournalEntryMutation>;
export type DeleteOneJournalEntryMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneJournalEntryMutation, DeleteOneJournalEntryMutationVariables>;
export const FindOneSectionDocument = gql`
    query findOneSection($where: SectionWhereUniqueInput!) {
  findOneSection(where: $where) {
    ...Section
  }
}
    ${SectionFragmentDoc}`;

/**
 * __useFindOneSectionQuery__
 *
 * To run a query within a React component, call `useFindOneSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneSectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneSectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneSectionQuery, FindOneSectionQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneSectionQuery, FindOneSectionQueryVariables>(FindOneSectionDocument, baseOptions);
      }
export function useFindOneSectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneSectionQuery, FindOneSectionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneSectionQuery, FindOneSectionQueryVariables>(FindOneSectionDocument, baseOptions);
        }
export type FindOneSectionQueryHookResult = ReturnType<typeof useFindOneSectionQuery>;
export type FindOneSectionLazyQueryHookResult = ReturnType<typeof useFindOneSectionLazyQuery>;
export type FindOneSectionQueryResult = ApolloReactCommon.QueryResult<FindOneSectionQuery, FindOneSectionQueryVariables>;
export const FindManySectionDocument = gql`
    query findManySection($where: SectionWhereInput, $orderBy: SectionOrderByInput, $cursor: SectionWhereUniqueInput, $skip: Int, $take: Int) {
  findManySection(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Section
  }
}
    ${SectionFragmentDoc}`;

/**
 * __useFindManySectionQuery__
 *
 * To run a query within a React component, call `useFindManySectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManySectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManySectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManySectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManySectionQuery, FindManySectionQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManySectionQuery, FindManySectionQueryVariables>(FindManySectionDocument, baseOptions);
      }
export function useFindManySectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManySectionQuery, FindManySectionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManySectionQuery, FindManySectionQueryVariables>(FindManySectionDocument, baseOptions);
        }
export type FindManySectionQueryHookResult = ReturnType<typeof useFindManySectionQuery>;
export type FindManySectionLazyQueryHookResult = ReturnType<typeof useFindManySectionLazyQuery>;
export type FindManySectionQueryResult = ApolloReactCommon.QueryResult<FindManySectionQuery, FindManySectionQueryVariables>;
export const FindManySectionCountDocument = gql`
    query findManySectionCount($where: SectionWhereInput, $orderBy: SectionOrderByInput, $cursor: SectionWhereUniqueInput, $skip: Int, $take: Int) {
  findManySectionCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManySectionCountQuery__
 *
 * To run a query within a React component, call `useFindManySectionCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManySectionCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManySectionCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManySectionCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManySectionCountQuery, FindManySectionCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManySectionCountQuery, FindManySectionCountQueryVariables>(FindManySectionCountDocument, baseOptions);
      }
export function useFindManySectionCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManySectionCountQuery, FindManySectionCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManySectionCountQuery, FindManySectionCountQueryVariables>(FindManySectionCountDocument, baseOptions);
        }
export type FindManySectionCountQueryHookResult = ReturnType<typeof useFindManySectionCountQuery>;
export type FindManySectionCountLazyQueryHookResult = ReturnType<typeof useFindManySectionCountLazyQuery>;
export type FindManySectionCountQueryResult = ApolloReactCommon.QueryResult<FindManySectionCountQuery, FindManySectionCountQueryVariables>;
export const CreateOneSectionDocument = gql`
    mutation createOneSection($data: SectionCreateInput!) {
  createOneSection(data: $data) {
    ...Section
  }
}
    ${SectionFragmentDoc}`;

/**
 * __useCreateOneSectionMutation__
 *
 * To run a mutation, you first call `useCreateOneSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneSectionMutation, { data, loading, error }] = useCreateOneSectionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneSectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneSectionMutation, CreateOneSectionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneSectionMutation, CreateOneSectionMutationVariables>(CreateOneSectionDocument, baseOptions);
      }
export type CreateOneSectionMutationHookResult = ReturnType<typeof useCreateOneSectionMutation>;
export type CreateOneSectionMutationResult = ApolloReactCommon.MutationResult<CreateOneSectionMutation>;
export type CreateOneSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneSectionMutation, CreateOneSectionMutationVariables>;
export const UpdateOneSectionDocument = gql`
    mutation updateOneSection($where: SectionWhereUniqueInput!, $data: SectionUpdateInput!) {
  updateOneSection(where: $where, data: $data) {
    ...Section
  }
}
    ${SectionFragmentDoc}`;

/**
 * __useUpdateOneSectionMutation__
 *
 * To run a mutation, you first call `useUpdateOneSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneSectionMutation, { data, loading, error }] = useUpdateOneSectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneSectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneSectionMutation, UpdateOneSectionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneSectionMutation, UpdateOneSectionMutationVariables>(UpdateOneSectionDocument, baseOptions);
      }
export type UpdateOneSectionMutationHookResult = ReturnType<typeof useUpdateOneSectionMutation>;
export type UpdateOneSectionMutationResult = ApolloReactCommon.MutationResult<UpdateOneSectionMutation>;
export type UpdateOneSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneSectionMutation, UpdateOneSectionMutationVariables>;
export const DeleteOneSectionDocument = gql`
    mutation deleteOneSection($where: SectionWhereUniqueInput!) {
  deleteOneSection(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneSectionMutation__
 *
 * To run a mutation, you first call `useDeleteOneSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneSectionMutation, { data, loading, error }] = useDeleteOneSectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneSectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneSectionMutation, DeleteOneSectionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneSectionMutation, DeleteOneSectionMutationVariables>(DeleteOneSectionDocument, baseOptions);
      }
export type DeleteOneSectionMutationHookResult = ReturnType<typeof useDeleteOneSectionMutation>;
export type DeleteOneSectionMutationResult = ApolloReactCommon.MutationResult<DeleteOneSectionMutation>;
export type DeleteOneSectionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneSectionMutation, DeleteOneSectionMutationVariables>;
export const FindOneStepDocument = gql`
    query findOneStep($where: StepWhereUniqueInput!) {
  findOneStep(where: $where) {
    ...Step
  }
}
    ${StepFragmentDoc}`;

/**
 * __useFindOneStepQuery__
 *
 * To run a query within a React component, call `useFindOneStepQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneStepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneStepQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneStepQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneStepQuery, FindOneStepQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneStepQuery, FindOneStepQueryVariables>(FindOneStepDocument, baseOptions);
      }
export function useFindOneStepLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneStepQuery, FindOneStepQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneStepQuery, FindOneStepQueryVariables>(FindOneStepDocument, baseOptions);
        }
export type FindOneStepQueryHookResult = ReturnType<typeof useFindOneStepQuery>;
export type FindOneStepLazyQueryHookResult = ReturnType<typeof useFindOneStepLazyQuery>;
export type FindOneStepQueryResult = ApolloReactCommon.QueryResult<FindOneStepQuery, FindOneStepQueryVariables>;
export const FindManyStepDocument = gql`
    query findManyStep($where: StepWhereInput, $orderBy: StepOrderByInput, $cursor: StepWhereUniqueInput, $skip: Int, $take: Int) {
  findManyStep(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Step
  }
}
    ${StepFragmentDoc}`;

/**
 * __useFindManyStepQuery__
 *
 * To run a query within a React component, call `useFindManyStepQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyStepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyStepQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyStepQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyStepQuery, FindManyStepQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyStepQuery, FindManyStepQueryVariables>(FindManyStepDocument, baseOptions);
      }
export function useFindManyStepLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyStepQuery, FindManyStepQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyStepQuery, FindManyStepQueryVariables>(FindManyStepDocument, baseOptions);
        }
export type FindManyStepQueryHookResult = ReturnType<typeof useFindManyStepQuery>;
export type FindManyStepLazyQueryHookResult = ReturnType<typeof useFindManyStepLazyQuery>;
export type FindManyStepQueryResult = ApolloReactCommon.QueryResult<FindManyStepQuery, FindManyStepQueryVariables>;
export const FindManyStepCountDocument = gql`
    query findManyStepCount($where: StepWhereInput, $orderBy: StepOrderByInput, $cursor: StepWhereUniqueInput, $skip: Int, $take: Int) {
  findManyStepCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyStepCountQuery__
 *
 * To run a query within a React component, call `useFindManyStepCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyStepCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyStepCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyStepCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyStepCountQuery, FindManyStepCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyStepCountQuery, FindManyStepCountQueryVariables>(FindManyStepCountDocument, baseOptions);
      }
export function useFindManyStepCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyStepCountQuery, FindManyStepCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyStepCountQuery, FindManyStepCountQueryVariables>(FindManyStepCountDocument, baseOptions);
        }
export type FindManyStepCountQueryHookResult = ReturnType<typeof useFindManyStepCountQuery>;
export type FindManyStepCountLazyQueryHookResult = ReturnType<typeof useFindManyStepCountLazyQuery>;
export type FindManyStepCountQueryResult = ApolloReactCommon.QueryResult<FindManyStepCountQuery, FindManyStepCountQueryVariables>;
export const CreateOneStepDocument = gql`
    mutation createOneStep($data: StepCreateInput!) {
  createOneStep(data: $data) {
    ...Step
  }
}
    ${StepFragmentDoc}`;

/**
 * __useCreateOneStepMutation__
 *
 * To run a mutation, you first call `useCreateOneStepMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneStepMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneStepMutation, { data, loading, error }] = useCreateOneStepMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneStepMutation, CreateOneStepMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneStepMutation, CreateOneStepMutationVariables>(CreateOneStepDocument, baseOptions);
      }
export type CreateOneStepMutationHookResult = ReturnType<typeof useCreateOneStepMutation>;
export type CreateOneStepMutationResult = ApolloReactCommon.MutationResult<CreateOneStepMutation>;
export type CreateOneStepMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneStepMutation, CreateOneStepMutationVariables>;
export const UpdateOneStepDocument = gql`
    mutation updateOneStep($where: StepWhereUniqueInput!, $data: StepUpdateInput!) {
  updateOneStep(where: $where, data: $data) {
    ...Step
  }
}
    ${StepFragmentDoc}`;

/**
 * __useUpdateOneStepMutation__
 *
 * To run a mutation, you first call `useUpdateOneStepMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneStepMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneStepMutation, { data, loading, error }] = useUpdateOneStepMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneStepMutation, UpdateOneStepMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneStepMutation, UpdateOneStepMutationVariables>(UpdateOneStepDocument, baseOptions);
      }
export type UpdateOneStepMutationHookResult = ReturnType<typeof useUpdateOneStepMutation>;
export type UpdateOneStepMutationResult = ApolloReactCommon.MutationResult<UpdateOneStepMutation>;
export type UpdateOneStepMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneStepMutation, UpdateOneStepMutationVariables>;
export const DeleteOneStepDocument = gql`
    mutation deleteOneStep($where: StepWhereUniqueInput!) {
  deleteOneStep(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneStepMutation__
 *
 * To run a mutation, you first call `useDeleteOneStepMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneStepMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneStepMutation, { data, loading, error }] = useDeleteOneStepMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneStepMutation, DeleteOneStepMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneStepMutation, DeleteOneStepMutationVariables>(DeleteOneStepDocument, baseOptions);
      }
export type DeleteOneStepMutationHookResult = ReturnType<typeof useDeleteOneStepMutation>;
export type DeleteOneStepMutationResult = ApolloReactCommon.MutationResult<DeleteOneStepMutation>;
export type DeleteOneStepMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneStepMutation, DeleteOneStepMutationVariables>;
export const FindOneUserDocument = gql`
    query findOneUser($where: UserWhereUniqueInput!) {
  findOneUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindOneUserQuery__
 *
 * To run a query within a React component, call `useFindOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneUserQuery, FindOneUserQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneUserQuery, FindOneUserQueryVariables>(FindOneUserDocument, baseOptions);
      }
export function useFindOneUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneUserQuery, FindOneUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneUserQuery, FindOneUserQueryVariables>(FindOneUserDocument, baseOptions);
        }
export type FindOneUserQueryHookResult = ReturnType<typeof useFindOneUserQuery>;
export type FindOneUserLazyQueryHookResult = ReturnType<typeof useFindOneUserLazyQuery>;
export type FindOneUserQueryResult = ApolloReactCommon.QueryResult<FindOneUserQuery, FindOneUserQueryVariables>;
export const FindManyUserDocument = gql`
    query findManyUser($where: UserWhereInput, $orderBy: UserOrderByInput, $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUser(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindManyUserQuery__
 *
 * To run a query within a React component, call `useFindManyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, baseOptions);
      }
export function useFindManyUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, baseOptions);
        }
export type FindManyUserQueryHookResult = ReturnType<typeof useFindManyUserQuery>;
export type FindManyUserLazyQueryHookResult = ReturnType<typeof useFindManyUserLazyQuery>;
export type FindManyUserQueryResult = ApolloReactCommon.QueryResult<FindManyUserQuery, FindManyUserQueryVariables>;
export const FindManyUserCountDocument = gql`
    query findManyUserCount($where: UserWhereInput, $orderBy: UserOrderByInput, $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUserCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyUserCountQuery__
 *
 * To run a query within a React component, call `useFindManyUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, baseOptions);
      }
export function useFindManyUserCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, baseOptions);
        }
export type FindManyUserCountQueryHookResult = ReturnType<typeof useFindManyUserCountQuery>;
export type FindManyUserCountLazyQueryHookResult = ReturnType<typeof useFindManyUserCountLazyQuery>;
export type FindManyUserCountQueryResult = ApolloReactCommon.QueryResult<FindManyUserCountQuery, FindManyUserCountQueryVariables>;
export const CreateOneUserDocument = gql`
    mutation createOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useCreateOneUserMutation__
 *
 * To run a mutation, you first call `useCreateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserMutation, { data, loading, error }] = useCreateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneUserMutation, CreateOneUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument, baseOptions);
      }
export type CreateOneUserMutationHookResult = ReturnType<typeof useCreateOneUserMutation>;
export type CreateOneUserMutationResult = ApolloReactCommon.MutationResult<CreateOneUserMutation>;
export type CreateOneUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateOneUser(where: $where, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, baseOptions);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = ApolloReactCommon.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const DeleteOneUserDocument = gql`
    mutation deleteOneUser($where: UserWhereUniqueInput!) {
  deleteOneUser(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneUserMutation__
 *
 * To run a mutation, you first call `useDeleteOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneUserMutation, { data, loading, error }] = useDeleteOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneUserMutation, DeleteOneUserMutationVariables>(DeleteOneUserDocument, baseOptions);
      }
export type DeleteOneUserMutationHookResult = ReturnType<typeof useDeleteOneUserMutation>;
export type DeleteOneUserMutationResult = ApolloReactCommon.MutationResult<DeleteOneUserMutation>;
export type DeleteOneUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>;