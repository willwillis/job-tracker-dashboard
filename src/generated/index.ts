import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
  /** Json custom scalar type */
  Json: any;
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

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
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
  distinct?: Maybe<GroupDistinctFieldEnum>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type DashboardSectionsArgs = {
  cursor?: Maybe<SectionWhereUniqueInput>;
  distinct?: Maybe<SectionDistinctFieldEnum>;
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

export enum DashboardDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MinuteOffset = 'minuteOffset',
  Name = 'name',
  Published = 'published',
  UpdatedAt = 'updatedAt'
}

export type DashboardListRelationFilter = {
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
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  minuteOffset?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type DashboardRelationFilter = {
  is?: Maybe<DashboardWhereInput>;
  isNot?: Maybe<DashboardWhereInput>;
};

export type DashboardScalarWhereInput = {
  AND?: Maybe<Array<DashboardScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  minuteOffset?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<DashboardScalarWhereInput>>;
  OR?: Maybe<Array<DashboardScalarWhereInput>>;
  published?: Maybe<BoolFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DashboardSumAggregateOutputType = {
  __typename?: 'DashboardSumAggregateOutputType';
  id: Scalars['Int'];
  minuteOffset: Scalars['Int'];
};

export type DashboardUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  groups?: Maybe<GroupUpdateManyWithoutDashboardsInput>;
  minuteOffset?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  sections?: Maybe<SectionUpdateManyWithoutDashboardInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DashboardUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minuteOffset?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DashboardUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minuteOffset?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  minuteOffset?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  sections?: Maybe<SectionUpdateManyWithoutDashboardInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DashboardUpdateWithoutSectionsDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  groups?: Maybe<GroupUpdateManyWithoutDashboardsInput>;
  minuteOffset?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  groups?: Maybe<GroupListRelationFilter>;
  id?: Maybe<IntFilter>;
  minuteOffset?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<DashboardWhereInput>>;
  OR?: Maybe<Array<DashboardWhereInput>>;
  published?: Maybe<BoolFilter>;
  sections?: Maybe<SectionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DashboardWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumJobStatusFieldUpdateOperationsInput = {
  set?: Maybe<JobStatus>;
};

export type EnumJobStatusFilter = {
  equals?: Maybe<JobStatus>;
  in?: Maybe<Array<JobStatus>>;
  not?: Maybe<NestedEnumJobStatusFilter>;
  notIn?: Maybe<Array<JobStatus>>;
};

export type EnumJobTypeNullableFilter = {
  equals?: Maybe<JobType>;
  in?: Maybe<Array<JobType>>;
  not?: Maybe<NestedEnumJobTypeNullableFilter>;
  notIn?: Maybe<Array<JobType>>;
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
  distinct?: Maybe<DashboardDistinctFieldEnum>;
  orderBy?: Maybe<DashboardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DashboardWhereInput>;
};


export type GroupUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserDistinctFieldEnum>;
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

export enum GroupDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GroupListRelationFilter = {
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
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GroupRelationFilter = {
  is?: Maybe<GroupWhereInput>;
  isNot?: Maybe<GroupWhereInput>;
};

export type GroupScalarWhereInput = {
  AND?: Maybe<Array<GroupScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<GroupScalarWhereInput>>;
  OR?: Maybe<Array<GroupScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type GroupSumAggregateOutputType = {
  __typename?: 'GroupSumAggregateOutputType';
  id: Scalars['Int'];
};

export type GroupUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dashboards?: Maybe<DashboardUpdateManyWithoutGroupsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateWithoutUsersDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dashboards?: Maybe<DashboardUpdateManyWithoutGroupsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  dashboards?: Maybe<DashboardListRelationFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<GroupWhereInput>>;
  OR?: Maybe<Array<GroupWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Job = {
  __typename?: 'Job';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  jobType?: Maybe<JobType>;
  name: Scalars['String'];
  runs: Array<JobRun>;
  Steps: Array<Step>;
  updatedAt: Scalars['DateTime'];
};


export type JobRunsArgs = {
  cursor?: Maybe<JobRunWhereUniqueInput>;
  distinct?: Maybe<JobRunDistinctFieldEnum>;
  orderBy?: Maybe<JobRunOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JobRunWhereInput>;
};


export type JobStepsArgs = {
  cursor?: Maybe<StepWhereUniqueInput>;
  distinct?: Maybe<StepDistinctFieldEnum>;
  orderBy?: Maybe<StepOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StepWhereInput>;
};

export type JobAvgAggregateOutputType = {
  __typename?: 'JobAvgAggregateOutputType';
  id: Scalars['Float'];
};

export type JobCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  jobType?: Maybe<JobType>;
  name: Scalars['String'];
  runs?: Maybe<JobRunCreateManyWithoutJobInput>;
  Steps?: Maybe<StepCreateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobCreateOneWithoutRunsInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutRunsInput>;
};

export type JobCreateOneWithoutStepsInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutStepsInput>;
};

export type JobCreateWithoutRunsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  jobType?: Maybe<JobType>;
  name: Scalars['String'];
  Steps?: Maybe<StepCreateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobCreateWithoutStepsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  jobType?: Maybe<JobType>;
  name: Scalars['String'];
  runs?: Maybe<JobRunCreateManyWithoutJobInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum JobDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  JobType = 'jobType',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type JobIdStartTimeCompoundUniqueInput = {
  jobId: Scalars['Int'];
  startTime: Scalars['DateTime'];
};

export type JobMaxAggregateOutputType = {
  __typename?: 'JobMaxAggregateOutputType';
  id: Scalars['Int'];
};

export type JobMinAggregateOutputType = {
  __typename?: 'JobMinAggregateOutputType';
  id: Scalars['Int'];
};

export type JobOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  jobType?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type JobRelationFilter = {
  is?: Maybe<JobWhereInput>;
  isNot?: Maybe<JobWhereInput>;
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
};

export type JobRunCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  exitCode?: Maybe<Scalars['Int']>;
  job: JobCreateOneWithoutRunsInput;
  jobRunId?: Maybe<Scalars['Int']>;
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
  moreInfo?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  status?: Maybe<JobStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum JobRunDistinctFieldEnum {
  CreatedAt = 'createdAt',
  EndTime = 'endTime',
  ExitCode = 'exitCode',
  Id = 'id',
  JobId = 'jobId',
  JobRunId = 'jobRunId',
  MoreInfo = 'moreInfo',
  StartTime = 'startTime',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type JobRunListRelationFilter = {
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
};

export type JobRunMinAggregateOutputType = {
  __typename?: 'JobRunMinAggregateOutputType';
  exitCode: Scalars['Int'];
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  jobRunId: Scalars['Int'];
};

export type JobRunOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  endTime?: Maybe<SortOrder>;
  exitCode?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  jobId?: Maybe<SortOrder>;
  jobRunId?: Maybe<SortOrder>;
  moreInfo?: Maybe<SortOrder>;
  startTime?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type JobRunScalarWhereInput = {
  AND?: Maybe<Array<JobRunScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  endTime?: Maybe<DateTimeNullableFilter>;
  exitCode?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  jobId?: Maybe<IntFilter>;
  jobRunId?: Maybe<IntNullableFilter>;
  moreInfo?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<JobRunScalarWhereInput>>;
  OR?: Maybe<Array<JobRunScalarWhereInput>>;
  startTime?: Maybe<DateTimeFilter>;
  status?: Maybe<EnumJobStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type JobRunSumAggregateOutputType = {
  __typename?: 'JobRunSumAggregateOutputType';
  exitCode: Scalars['Int'];
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  jobRunId: Scalars['Int'];
};

export type JobRunUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endTime?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exitCode?: Maybe<NullableIntFieldUpdateOperationsInput>;
  job?: Maybe<JobUpdateOneRequiredWithoutRunsInput>;
  jobRunId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moreInfo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumJobStatusFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobRunUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endTime?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exitCode?: Maybe<NullableIntFieldUpdateOperationsInput>;
  jobRunId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moreInfo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumJobStatusFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobRunUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endTime?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exitCode?: Maybe<NullableIntFieldUpdateOperationsInput>;
  jobRunId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moreInfo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumJobStatusFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endTime?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exitCode?: Maybe<NullableIntFieldUpdateOperationsInput>;
  jobRunId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moreInfo?: Maybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  status?: Maybe<EnumJobStatusFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  endTime?: Maybe<DateTimeNullableFilter>;
  exitCode?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  job?: Maybe<JobWhereInput>;
  jobId?: Maybe<IntFilter>;
  jobRunId?: Maybe<IntNullableFilter>;
  moreInfo?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<JobRunWhereInput>>;
  OR?: Maybe<Array<JobRunWhereInput>>;
  startTime?: Maybe<DateTimeFilter>;
  status?: Maybe<EnumJobStatusFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type JobRunWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  jobId_startTime?: Maybe<JobIdStartTimeCompoundUniqueInput>;
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
};

export enum JobType {
  Autosys = 'AUTOSYS',
  Database = 'DATABASE',
  Fmc = 'FMC',
  Instrumented = 'INSTRUMENTED'
}

export type JobUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  jobType?: Maybe<NullableEnumJobTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  runs?: Maybe<JobRunUpdateManyWithoutJobInput>;
  Steps?: Maybe<StepUpdateManyWithoutJobInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  jobType?: Maybe<NullableEnumJobTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpdateOneRequiredWithoutRunsInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutRunsInput>;
  update?: Maybe<JobUpdateWithoutRunsDataInput>;
  upsert?: Maybe<JobUpsertWithoutRunsInput>;
};

export type JobUpdateOneRequiredWithoutStepsInput = {
  connect?: Maybe<JobWhereUniqueInput>;
  create?: Maybe<JobCreateWithoutStepsInput>;
  update?: Maybe<JobUpdateWithoutStepsDataInput>;
  upsert?: Maybe<JobUpsertWithoutStepsInput>;
};

export type JobUpdateWithoutRunsDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  jobType?: Maybe<NullableEnumJobTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Steps?: Maybe<StepUpdateManyWithoutJobInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpdateWithoutStepsDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  jobType?: Maybe<NullableEnumJobTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  runs?: Maybe<JobRunUpdateManyWithoutJobInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpsertWithoutRunsInput = {
  create: JobCreateWithoutRunsInput;
  update: JobUpdateWithoutRunsDataInput;
};

export type JobUpsertWithoutStepsInput = {
  create: JobCreateWithoutStepsInput;
  update: JobUpdateWithoutStepsDataInput;
};

export type JobWhereInput = {
  AND?: Maybe<Array<JobWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  jobType?: Maybe<EnumJobTypeNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<JobWhereInput>>;
  OR?: Maybe<Array<JobWhereInput>>;
  runs?: Maybe<JobRunListRelationFilter>;
  Steps?: Maybe<StepListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type JobWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type JournalEntry = {
  __typename?: 'JournalEntry';
  author: User;
  authorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  entry: Scalars['String'];
  id: Scalars['Int'];
  step: Step;
  stepId: Scalars['Int'];
};

export type JournalEntryAvgAggregateOutputType = {
  __typename?: 'JournalEntryAvgAggregateOutputType';
  authorId: Scalars['Float'];
  id: Scalars['Float'];
  stepId: Scalars['Float'];
};

export type JournalEntryCreateInput = {
  author: UserCreateOneWithoutJournalEntriesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  entry: Scalars['String'];
  step: StepCreateOneWithoutJournalEntriesInput;
};

export type JournalEntryCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  create?: Maybe<Array<JournalEntryCreateWithoutAuthorInput>>;
};

export type JournalEntryCreateManyWithoutStepInput = {
  connect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  create?: Maybe<Array<JournalEntryCreateWithoutStepInput>>;
};

export type JournalEntryCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  entry: Scalars['String'];
  step: StepCreateOneWithoutJournalEntriesInput;
};

export type JournalEntryCreateWithoutStepInput = {
  author: UserCreateOneWithoutJournalEntriesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  entry: Scalars['String'];
};

export enum JournalEntryDistinctFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Entry = 'entry',
  Id = 'id',
  StepId = 'stepId'
}

export type JournalEntryListRelationFilter = {
  every?: Maybe<JournalEntryWhereInput>;
  none?: Maybe<JournalEntryWhereInput>;
  some?: Maybe<JournalEntryWhereInput>;
};

export type JournalEntryMaxAggregateOutputType = {
  __typename?: 'JournalEntryMaxAggregateOutputType';
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  stepId: Scalars['Int'];
};

export type JournalEntryMinAggregateOutputType = {
  __typename?: 'JournalEntryMinAggregateOutputType';
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  stepId: Scalars['Int'];
};

export type JournalEntryOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  entry?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  stepId?: Maybe<SortOrder>;
};

export type JournalEntryScalarWhereInput = {
  AND?: Maybe<Array<JournalEntryScalarWhereInput>>;
  authorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  entry?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<JournalEntryScalarWhereInput>>;
  OR?: Maybe<Array<JournalEntryScalarWhereInput>>;
  stepId?: Maybe<IntFilter>;
};

export type JournalEntrySumAggregateOutputType = {
  __typename?: 'JournalEntrySumAggregateOutputType';
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  stepId: Scalars['Int'];
};

export type JournalEntryUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutJournalEntriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  entry?: Maybe<StringFieldUpdateOperationsInput>;
  step?: Maybe<StepUpdateOneRequiredWithoutJournalEntriesInput>;
};

export type JournalEntryUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  entry?: Maybe<StringFieldUpdateOperationsInput>;
};

export type JournalEntryUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  entry?: Maybe<StringFieldUpdateOperationsInput>;
};

export type JournalEntryUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  create?: Maybe<Array<JournalEntryCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<JournalEntryScalarWhereInput>>;
  disconnect?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  set?: Maybe<Array<JournalEntryWhereUniqueInput>>;
  update?: Maybe<Array<JournalEntryUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<JournalEntryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<JournalEntryUpsertWithWhereUniqueWithoutAuthorInput>>;
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

export type JournalEntryUpdateWithoutAuthorDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  entry?: Maybe<StringFieldUpdateOperationsInput>;
  step?: Maybe<StepUpdateOneRequiredWithoutJournalEntriesInput>;
};

export type JournalEntryUpdateWithoutStepDataInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutJournalEntriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  entry?: Maybe<StringFieldUpdateOperationsInput>;
};

export type JournalEntryUpdateWithWhereUniqueWithoutAuthorInput = {
  data: JournalEntryUpdateWithoutAuthorDataInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpdateWithWhereUniqueWithoutStepInput = {
  data: JournalEntryUpdateWithoutStepDataInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpsertWithWhereUniqueWithoutAuthorInput = {
  create: JournalEntryCreateWithoutAuthorInput;
  update: JournalEntryUpdateWithoutAuthorDataInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpsertWithWhereUniqueWithoutStepInput = {
  create: JournalEntryCreateWithoutStepInput;
  update: JournalEntryUpdateWithoutStepDataInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryWhereInput = {
  AND?: Maybe<Array<JournalEntryWhereInput>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  entry?: Maybe<StringFilter>;
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

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumJobStatusFilter = {
  equals?: Maybe<JobStatus>;
  in?: Maybe<Array<JobStatus>>;
  not?: Maybe<NestedEnumJobStatusFilter>;
  notIn?: Maybe<Array<JobStatus>>;
};

export type NestedEnumJobTypeNullableFilter = {
  equals?: Maybe<JobType>;
  in?: Maybe<Array<JobType>>;
  not?: Maybe<NestedEnumJobTypeNullableFilter>;
  notIn?: Maybe<Array<JobType>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableEnumJobTypeFieldUpdateOperationsInput = {
  set?: Maybe<JobType>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

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

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

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
  distinct?: Maybe<StepDistinctFieldEnum>;
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

export enum SectionDistinctFieldEnum {
  CreatedAt = 'createdAt',
  DashboardId = 'dashboardId',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  Published = 'published',
  SuccessCriteria = 'successCriteria',
  UpdatedAt = 'updatedAt'
}

export type SectionListRelationFilter = {
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
  createdAt?: Maybe<SortOrder>;
  dashboardId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  successCriteria?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SectionRelationFilter = {
  is?: Maybe<SectionWhereInput>;
  isNot?: Maybe<SectionWhereInput>;
};

export type SectionScalarWhereInput = {
  AND?: Maybe<Array<SectionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  dashboardId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SectionScalarWhereInput>>;
  OR?: Maybe<Array<SectionScalarWhereInput>>;
  order?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  successCriteria?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SectionSumAggregateOutputType = {
  __typename?: 'SectionSumAggregateOutputType';
  dashboardId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
};

export type SectionUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dashboard?: Maybe<DashboardUpdateOneWithoutSectionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  steps?: Maybe<StepUpdateManyWithoutSectionInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  steps?: Maybe<StepUpdateManyWithoutSectionInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionUpdateWithoutStepsDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dashboard?: Maybe<DashboardUpdateOneWithoutSectionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  dashboardId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SectionWhereInput>>;
  OR?: Maybe<Array<SectionWhereInput>>;
  order?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  steps?: Maybe<StepListRelationFilter>;
  successCriteria?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SectionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

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
  distinct?: Maybe<JournalEntryDistinctFieldEnum>;
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
  job: JobCreateOneWithoutStepsInput;
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
  job: JobCreateOneWithoutStepsInput;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  section: SectionCreateOneWithoutStepsInput;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StepCreateWithoutSectionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  job: JobCreateOneWithoutStepsInput;
  journalEntries?: Maybe<JournalEntryCreateManyWithoutStepInput>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  successCriteria?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum StepDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  JobId = 'jobId',
  Name = 'name',
  Order = 'order',
  SectionId = 'sectionId',
  SuccessCriteria = 'successCriteria',
  UpdatedAt = 'updatedAt'
}

export type StepListRelationFilter = {
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
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  jobId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  sectionId?: Maybe<SortOrder>;
  successCriteria?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StepRelationFilter = {
  is?: Maybe<StepWhereInput>;
  isNot?: Maybe<StepWhereInput>;
};

export type StepScalarWhereInput = {
  AND?: Maybe<Array<StepScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  jobId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<StepScalarWhereInput>>;
  OR?: Maybe<Array<StepScalarWhereInput>>;
  order?: Maybe<IntFilter>;
  sectionId?: Maybe<IntFilter>;
  successCriteria?: Maybe<StringNullableFilter>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  job?: Maybe<JobUpdateOneRequiredWithoutStepsInput>;
  journalEntries?: Maybe<JournalEntryUpdateManyWithoutStepInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  section?: Maybe<SectionUpdateOneRequiredWithoutStepsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StepUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StepUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  journalEntries?: Maybe<JournalEntryUpdateManyWithoutStepInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  section?: Maybe<SectionUpdateOneRequiredWithoutStepsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StepUpdateWithoutJournalEntriesDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  job?: Maybe<JobUpdateOneRequiredWithoutStepsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  section?: Maybe<SectionUpdateOneRequiredWithoutStepsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StepUpdateWithoutSectionDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  job?: Maybe<JobUpdateOneRequiredWithoutStepsInput>;
  journalEntries?: Maybe<JournalEntryUpdateManyWithoutStepInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
  successCriteria?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  journalEntries?: Maybe<JournalEntryListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<StepWhereInput>>;
  OR?: Maybe<Array<StepWhereInput>>;
  order?: Maybe<IntFilter>;
  section?: Maybe<SectionWhereInput>;
  sectionId?: Maybe<IntFilter>;
  successCriteria?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StepWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
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
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
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
  JournalEntries: Array<JournalEntry>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type UserJournalEntriesArgs = {
  cursor?: Maybe<JournalEntryWhereUniqueInput>;
  distinct?: Maybe<JournalEntryDistinctFieldEnum>;
  orderBy?: Maybe<JournalEntryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<JournalEntryWhereInput>;
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
  JournalEntries?: Maybe<JournalEntryCreateManyWithoutAuthorInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserCreateManyWithoutGroupInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutGroupInput>>;
};

export type UserCreateOneWithoutJournalEntriesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutJournalEntriesInput>;
};

export type UserCreateWithoutGroupInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  JournalEntries?: Maybe<JournalEntryCreateManyWithoutAuthorInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserCreateWithoutJournalEntriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export enum UserDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GroupId = 'groupId',
  Id = 'id',
  IsAdmin = 'isAdmin',
  Name = 'name',
  Password = 'password'
}

export type UserListRelationFilter = {
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
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isAdmin?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  isAdmin?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  JournalEntries?: Maybe<JournalEntryUpdateManyWithoutAuthorInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutJournalEntriesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutJournalEntriesInput>;
  update?: Maybe<UserUpdateWithoutJournalEntriesDataInput>;
  upsert?: Maybe<UserUpsertWithoutJournalEntriesInput>;
};

export type UserUpdateWithoutGroupDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  JournalEntries?: Maybe<JournalEntryUpdateManyWithoutAuthorInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutJournalEntriesDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithWhereUniqueWithoutGroupInput = {
  data: UserUpdateWithoutGroupDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutJournalEntriesInput = {
  create: UserCreateWithoutJournalEntriesInput;
  update: UserUpdateWithoutJournalEntriesDataInput;
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
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  isAdmin?: Maybe<BoolFilter>;
  JournalEntries?: Maybe<JournalEntryListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
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
    & Pick<User, 'id' | 'name' | 'email' | 'isAdmin'>
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
    & Pick<Dashboard, 'id' | 'name'>
    & { groups: Array<(
      { __typename?: 'Group' }
      & Pick<Group, 'id'>
    )> }
  )>> }
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
    & Pick<Group, 'id' | 'name'>
  )>> }
);


export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
    isAdmin
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
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
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
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const FindOneDashboardDocument = gql`
    query findOneDashboard($where: DashboardWhereUniqueInput!) {
  findOneDashboard(where: $where) {
    id
    name
    sections(orderBy: {order: asc}) {
      id
      name
      order
      steps(orderBy: {order: asc}) {
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
export function useFindOneDashboardQuery(baseOptions?: Apollo.QueryHookOptions<FindOneDashboardQuery, FindOneDashboardQueryVariables>) {
        return Apollo.useQuery<FindOneDashboardQuery, FindOneDashboardQueryVariables>(FindOneDashboardDocument, baseOptions);
      }
export function useFindOneDashboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneDashboardQuery, FindOneDashboardQueryVariables>) {
          return Apollo.useLazyQuery<FindOneDashboardQuery, FindOneDashboardQueryVariables>(FindOneDashboardDocument, baseOptions);
        }
export type FindOneDashboardQueryHookResult = ReturnType<typeof useFindOneDashboardQuery>;
export type FindOneDashboardLazyQueryHookResult = ReturnType<typeof useFindOneDashboardLazyQuery>;
export type FindOneDashboardQueryResult = Apollo.QueryResult<FindOneDashboardQuery, FindOneDashboardQueryVariables>;
export const FindManyDashboardDocument = gql`
    query findManyDashboard($where: DashboardWhereInput, $orderBy: DashboardOrderByInput, $cursor: DashboardWhereUniqueInput, $skip: Int, $take: Int) {
  findManyDashboard(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    id
    name
    groups {
      id
    }
  }
}
    `;

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
export function useFindManyDashboardQuery(baseOptions?: Apollo.QueryHookOptions<FindManyDashboardQuery, FindManyDashboardQueryVariables>) {
        return Apollo.useQuery<FindManyDashboardQuery, FindManyDashboardQueryVariables>(FindManyDashboardDocument, baseOptions);
      }
export function useFindManyDashboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyDashboardQuery, FindManyDashboardQueryVariables>) {
          return Apollo.useLazyQuery<FindManyDashboardQuery, FindManyDashboardQueryVariables>(FindManyDashboardDocument, baseOptions);
        }
export type FindManyDashboardQueryHookResult = ReturnType<typeof useFindManyDashboardQuery>;
export type FindManyDashboardLazyQueryHookResult = ReturnType<typeof useFindManyDashboardLazyQuery>;
export type FindManyDashboardQueryResult = Apollo.QueryResult<FindManyDashboardQuery, FindManyDashboardQueryVariables>;
export const FindManyGroupDocument = gql`
    query findManyGroup($where: GroupWhereInput, $orderBy: GroupOrderByInput, $cursor: GroupWhereUniqueInput, $skip: Int, $take: Int) {
  findManyGroup(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    id
    name
  }
}
    `;

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
export function useFindManyGroupQuery(baseOptions?: Apollo.QueryHookOptions<FindManyGroupQuery, FindManyGroupQueryVariables>) {
        return Apollo.useQuery<FindManyGroupQuery, FindManyGroupQueryVariables>(FindManyGroupDocument, baseOptions);
      }
export function useFindManyGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyGroupQuery, FindManyGroupQueryVariables>) {
          return Apollo.useLazyQuery<FindManyGroupQuery, FindManyGroupQueryVariables>(FindManyGroupDocument, baseOptions);
        }
export type FindManyGroupQueryHookResult = ReturnType<typeof useFindManyGroupQuery>;
export type FindManyGroupLazyQueryHookResult = ReturnType<typeof useFindManyGroupLazyQuery>;
export type FindManyGroupQueryResult = Apollo.QueryResult<FindManyGroupQuery, FindManyGroupQueryVariables>;