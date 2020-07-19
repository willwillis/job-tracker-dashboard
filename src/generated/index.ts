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
  status: JobStatus;
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
  status?: Maybe<JobStatusFilter>;
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
  status?: Maybe<JobStatusFilter>;
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

export type JobStatusFilter = {
  equals?: Maybe<JobStatus>;
  in?: Maybe<Array<JobStatus>>;
  not?: Maybe<JobStatus>;
  notIn?: Maybe<Array<JobStatus>>;
};

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
  order: Scalars['Int'];
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
  order?: Maybe<IntFilter>;
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
  order?: Maybe<IntFilter>;
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
  order: Scalars['Int'];
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
  order?: Maybe<IntFilter>;
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
  order?: Maybe<IntFilter>;
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
  isAdmin: Scalars['Boolean'];
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
  isAdmin?: Maybe<Scalars['Boolean']>;
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
  isAdmin?: Maybe<Scalars['Boolean']>;
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
  isAdmin?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  isAdmin?: Maybe<BooleanFilter>;
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
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
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
  isAdmin?: Maybe<Scalars['Boolean']>;
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
  isAdmin?: Maybe<BooleanFilter>;
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

export type FindOneDashboardQueryVariables = Exact<{
  where: DashboardWhereUniqueInput;
}>;


export type FindOneDashboardQuery = (
  { __typename?: 'Query' }
  & { findOneDashboard?: Maybe<(
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id' | 'name'>
    & { sections: Array<(
      { __typename?: 'Section' }
      & Pick<Section, 'id' | 'name' | 'order'>
      & { steps: Array<(
        { __typename?: 'Step' }
        & Pick<Step, 'id' | 'name' | 'order'>
        & { job: (
          { __typename?: 'Job' }
          & Pick<Job, 'id' | 'name'>
          & { runs: Array<(
            { __typename?: 'JobRun' }
            & Pick<JobRun, 'id' | 'startTime' | 'endTime' | 'status'>
          )> }
        ) }
      )> }
    )> }
  )> }
);


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
    id
    name
    sections(orderBy: {order: asc}) {
      id
      name
      order
      steps {
        id
        name
        order
        job {
          id
          name
          runs {
            id
            startTime
            endTime
            status
          }
        }
      }
    }
  }
}
    `;

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