import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type CreateFeedingSchedulesMutationResponse = {
  __typename?: 'CreateFeedingSchedulesMutationResponse';
  feedingSchedules: Array<FeedingSchedule>;
  info: CreateInfo;
};

export type CreateFeedingsMutationResponse = {
  __typename?: 'CreateFeedingsMutationResponse';
  feedings: Array<Feeding>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreatePetsMutationResponse = {
  __typename?: 'CreatePetsMutationResponse';
  info: CreateInfo;
  pets: Array<Pet>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelection = {
  __typename?: 'DateTimeAggregateSelection';
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Feeding = {
  __typename?: 'Feeding';
  am_pm: Scalars['String'];
  createAt: Scalars['DateTime'];
  eater: Pet;
  eaterAggregate?: Maybe<FeedingPetEaterAggregationSelection>;
  eaterConnection: FeedingEaterConnection;
  giver: User;
  giverAggregate?: Maybe<FeedingUserGiverAggregationSelection>;
  giverConnection: FeedingGiverConnection;
  id: Scalars['ID'];
  updateAt?: Maybe<Scalars['DateTime']>;
};


export type FeedingEaterArgs = {
  options?: InputMaybe<PetOptions>;
  where?: InputMaybe<PetWhere>;
};


export type FeedingEaterAggregateArgs = {
  where?: InputMaybe<PetWhere>;
};


export type FeedingEaterConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FeedingEaterConnectionSort>>;
  where?: InputMaybe<FeedingEaterConnectionWhere>;
};


export type FeedingGiverArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type FeedingGiverAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type FeedingGiverConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FeedingGiverConnectionSort>>;
  where?: InputMaybe<FeedingGiverConnectionWhere>;
};

export type FeedingAggregateSelection = {
  __typename?: 'FeedingAggregateSelection';
  am_pm: StringAggregateSelection;
  count: Scalars['Int'];
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type FeedingConnectInput = {
  eater?: InputMaybe<FeedingEaterConnectFieldInput>;
  giver?: InputMaybe<FeedingGiverConnectFieldInput>;
};

export type FeedingConnectWhere = {
  node: FeedingWhere;
};

export type FeedingCreateInput = {
  am_pm: Scalars['String'];
  eater?: InputMaybe<FeedingEaterFieldInput>;
  giver?: InputMaybe<FeedingGiverFieldInput>;
};

export type FeedingDeleteInput = {
  eater?: InputMaybe<FeedingEaterDeleteFieldInput>;
  giver?: InputMaybe<FeedingGiverDeleteFieldInput>;
};

export type FeedingDisconnectInput = {
  eater?: InputMaybe<FeedingEaterDisconnectFieldInput>;
  giver?: InputMaybe<FeedingGiverDisconnectFieldInput>;
};

export type FeedingEaterAggregateInput = {
  AND?: InputMaybe<Array<FeedingEaterAggregateInput>>;
  OR?: InputMaybe<Array<FeedingEaterAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<FeedingEaterNodeAggregationWhereInput>;
};

export type FeedingEaterConnectFieldInput = {
  connect?: InputMaybe<PetConnectInput>;
  where?: InputMaybe<PetConnectWhere>;
};

export type FeedingEaterConnection = {
  __typename?: 'FeedingEaterConnection';
  edges: Array<FeedingEaterRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeedingEaterConnectionSort = {
  node?: InputMaybe<PetSort>;
};

export type FeedingEaterConnectionWhere = {
  AND?: InputMaybe<Array<FeedingEaterConnectionWhere>>;
  OR?: InputMaybe<Array<FeedingEaterConnectionWhere>>;
  node?: InputMaybe<PetWhere>;
  node_NOT?: InputMaybe<PetWhere>;
};

export type FeedingEaterCreateFieldInput = {
  node: PetCreateInput;
};

export type FeedingEaterDeleteFieldInput = {
  delete?: InputMaybe<PetDeleteInput>;
  where?: InputMaybe<FeedingEaterConnectionWhere>;
};

export type FeedingEaterDisconnectFieldInput = {
  disconnect?: InputMaybe<PetDisconnectInput>;
  where?: InputMaybe<FeedingEaterConnectionWhere>;
};

export type FeedingEaterFieldInput = {
  connect?: InputMaybe<FeedingEaterConnectFieldInput>;
  create?: InputMaybe<FeedingEaterCreateFieldInput>;
};

export type FeedingEaterNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FeedingEaterNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FeedingEaterNodeAggregationWhereInput>>;
  createAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updateAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type FeedingEaterRelationship = {
  __typename?: 'FeedingEaterRelationship';
  cursor: Scalars['String'];
  node: Pet;
};

export type FeedingEaterUpdateConnectionInput = {
  node?: InputMaybe<PetUpdateInput>;
};

export type FeedingEaterUpdateFieldInput = {
  connect?: InputMaybe<FeedingEaterConnectFieldInput>;
  create?: InputMaybe<FeedingEaterCreateFieldInput>;
  delete?: InputMaybe<FeedingEaterDeleteFieldInput>;
  disconnect?: InputMaybe<FeedingEaterDisconnectFieldInput>;
  update?: InputMaybe<FeedingEaterUpdateConnectionInput>;
  where?: InputMaybe<FeedingEaterConnectionWhere>;
};

export type FeedingGiverAggregateInput = {
  AND?: InputMaybe<Array<FeedingGiverAggregateInput>>;
  OR?: InputMaybe<Array<FeedingGiverAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<FeedingGiverNodeAggregationWhereInput>;
};

export type FeedingGiverConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  where?: InputMaybe<UserConnectWhere>;
};

export type FeedingGiverConnection = {
  __typename?: 'FeedingGiverConnection';
  edges: Array<FeedingGiverRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeedingGiverConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type FeedingGiverConnectionWhere = {
  AND?: InputMaybe<Array<FeedingGiverConnectionWhere>>;
  OR?: InputMaybe<Array<FeedingGiverConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type FeedingGiverCreateFieldInput = {
  node: UserCreateInput;
};

export type FeedingGiverDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<FeedingGiverConnectionWhere>;
};

export type FeedingGiverDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<FeedingGiverConnectionWhere>;
};

export type FeedingGiverFieldInput = {
  connect?: InputMaybe<FeedingGiverConnectFieldInput>;
  create?: InputMaybe<FeedingGiverCreateFieldInput>;
};

export type FeedingGiverNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FeedingGiverNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FeedingGiverNodeAggregationWhereInput>>;
  createAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updateAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type FeedingGiverRelationship = {
  __typename?: 'FeedingGiverRelationship';
  cursor: Scalars['String'];
  node: User;
};

export type FeedingGiverUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type FeedingGiverUpdateFieldInput = {
  connect?: InputMaybe<FeedingGiverConnectFieldInput>;
  create?: InputMaybe<FeedingGiverCreateFieldInput>;
  delete?: InputMaybe<FeedingGiverDeleteFieldInput>;
  disconnect?: InputMaybe<FeedingGiverDisconnectFieldInput>;
  update?: InputMaybe<FeedingGiverUpdateConnectionInput>;
  where?: InputMaybe<FeedingGiverConnectionWhere>;
};

export type FeedingOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more FeedingSort objects to sort Feedings by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<FeedingSort>>>;
};

export type FeedingPetEaterAggregationSelection = {
  __typename?: 'FeedingPetEaterAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<FeedingPetEaterNodeAggregateSelection>;
};

export type FeedingPetEaterNodeAggregateSelection = {
  __typename?: 'FeedingPetEaterNodeAggregateSelection';
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type FeedingRelationInput = {
  eater?: InputMaybe<FeedingEaterCreateFieldInput>;
  giver?: InputMaybe<FeedingGiverCreateFieldInput>;
};

export type FeedingSchedule = {
  __typename?: 'FeedingSchedule';
  am_pm: Scalars['String'];
  createAt: Scalars['DateTime'];
  eater: Pet;
  eaterAggregate?: Maybe<FeedingSchedulePetEaterAggregationSelection>;
  eaterConnection: FeedingScheduleEaterConnection;
  feeding?: Maybe<Feeding>;
  feedingDate: Scalars['DateTime'];
  giver: User;
  giverAggregate?: Maybe<FeedingScheduleUserGiverAggregationSelection>;
  giverConnection: FeedingScheduleGiverConnection;
  id: Scalars['ID'];
  updateAt?: Maybe<Scalars['DateTime']>;
};


export type FeedingScheduleEaterArgs = {
  options?: InputMaybe<PetOptions>;
  where?: InputMaybe<PetWhere>;
};


export type FeedingScheduleEaterAggregateArgs = {
  where?: InputMaybe<PetWhere>;
};


export type FeedingScheduleEaterConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FeedingScheduleEaterConnectionSort>>;
  where?: InputMaybe<FeedingScheduleEaterConnectionWhere>;
};


export type FeedingScheduleGiverArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type FeedingScheduleGiverAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type FeedingScheduleGiverConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FeedingScheduleGiverConnectionSort>>;
  where?: InputMaybe<FeedingScheduleGiverConnectionWhere>;
};

export type FeedingScheduleAggregateSelection = {
  __typename?: 'FeedingScheduleAggregateSelection';
  am_pm: StringAggregateSelection;
  count: Scalars['Int'];
  createAt: DateTimeAggregateSelection;
  feedingDate: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type FeedingScheduleConnectInput = {
  eater?: InputMaybe<FeedingScheduleEaterConnectFieldInput>;
  giver?: InputMaybe<FeedingScheduleGiverConnectFieldInput>;
};

export type FeedingScheduleCreateInput = {
  am_pm: Scalars['String'];
  eater?: InputMaybe<FeedingScheduleEaterFieldInput>;
  feedingDate: Scalars['DateTime'];
  giver?: InputMaybe<FeedingScheduleGiverFieldInput>;
};

export type FeedingScheduleDeleteInput = {
  eater?: InputMaybe<FeedingScheduleEaterDeleteFieldInput>;
  giver?: InputMaybe<FeedingScheduleGiverDeleteFieldInput>;
};

export type FeedingScheduleDisconnectInput = {
  eater?: InputMaybe<FeedingScheduleEaterDisconnectFieldInput>;
  giver?: InputMaybe<FeedingScheduleGiverDisconnectFieldInput>;
};

export type FeedingScheduleEaterAggregateInput = {
  AND?: InputMaybe<Array<FeedingScheduleEaterAggregateInput>>;
  OR?: InputMaybe<Array<FeedingScheduleEaterAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<FeedingScheduleEaterNodeAggregationWhereInput>;
};

export type FeedingScheduleEaterConnectFieldInput = {
  connect?: InputMaybe<PetConnectInput>;
  where?: InputMaybe<PetConnectWhere>;
};

export type FeedingScheduleEaterConnection = {
  __typename?: 'FeedingScheduleEaterConnection';
  edges: Array<FeedingScheduleEaterRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeedingScheduleEaterConnectionSort = {
  node?: InputMaybe<PetSort>;
};

export type FeedingScheduleEaterConnectionWhere = {
  AND?: InputMaybe<Array<FeedingScheduleEaterConnectionWhere>>;
  OR?: InputMaybe<Array<FeedingScheduleEaterConnectionWhere>>;
  node?: InputMaybe<PetWhere>;
  node_NOT?: InputMaybe<PetWhere>;
};

export type FeedingScheduleEaterCreateFieldInput = {
  node: PetCreateInput;
};

export type FeedingScheduleEaterDeleteFieldInput = {
  delete?: InputMaybe<PetDeleteInput>;
  where?: InputMaybe<FeedingScheduleEaterConnectionWhere>;
};

export type FeedingScheduleEaterDisconnectFieldInput = {
  disconnect?: InputMaybe<PetDisconnectInput>;
  where?: InputMaybe<FeedingScheduleEaterConnectionWhere>;
};

export type FeedingScheduleEaterFieldInput = {
  connect?: InputMaybe<FeedingScheduleEaterConnectFieldInput>;
  create?: InputMaybe<FeedingScheduleEaterCreateFieldInput>;
};

export type FeedingScheduleEaterNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FeedingScheduleEaterNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FeedingScheduleEaterNodeAggregationWhereInput>>;
  createAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updateAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type FeedingScheduleEaterRelationship = {
  __typename?: 'FeedingScheduleEaterRelationship';
  cursor: Scalars['String'];
  node: Pet;
};

export type FeedingScheduleEaterUpdateConnectionInput = {
  node?: InputMaybe<PetUpdateInput>;
};

export type FeedingScheduleEaterUpdateFieldInput = {
  connect?: InputMaybe<FeedingScheduleEaterConnectFieldInput>;
  create?: InputMaybe<FeedingScheduleEaterCreateFieldInput>;
  delete?: InputMaybe<FeedingScheduleEaterDeleteFieldInput>;
  disconnect?: InputMaybe<FeedingScheduleEaterDisconnectFieldInput>;
  update?: InputMaybe<FeedingScheduleEaterUpdateConnectionInput>;
  where?: InputMaybe<FeedingScheduleEaterConnectionWhere>;
};

export type FeedingScheduleGiverAggregateInput = {
  AND?: InputMaybe<Array<FeedingScheduleGiverAggregateInput>>;
  OR?: InputMaybe<Array<FeedingScheduleGiverAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<FeedingScheduleGiverNodeAggregationWhereInput>;
};

export type FeedingScheduleGiverConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  where?: InputMaybe<UserConnectWhere>;
};

export type FeedingScheduleGiverConnection = {
  __typename?: 'FeedingScheduleGiverConnection';
  edges: Array<FeedingScheduleGiverRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeedingScheduleGiverConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type FeedingScheduleGiverConnectionWhere = {
  AND?: InputMaybe<Array<FeedingScheduleGiverConnectionWhere>>;
  OR?: InputMaybe<Array<FeedingScheduleGiverConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type FeedingScheduleGiverCreateFieldInput = {
  node: UserCreateInput;
};

export type FeedingScheduleGiverDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<FeedingScheduleGiverConnectionWhere>;
};

export type FeedingScheduleGiverDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<FeedingScheduleGiverConnectionWhere>;
};

export type FeedingScheduleGiverFieldInput = {
  connect?: InputMaybe<FeedingScheduleGiverConnectFieldInput>;
  create?: InputMaybe<FeedingScheduleGiverCreateFieldInput>;
};

export type FeedingScheduleGiverNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FeedingScheduleGiverNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FeedingScheduleGiverNodeAggregationWhereInput>>;
  createAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updateAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type FeedingScheduleGiverRelationship = {
  __typename?: 'FeedingScheduleGiverRelationship';
  cursor: Scalars['String'];
  node: User;
};

export type FeedingScheduleGiverUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type FeedingScheduleGiverUpdateFieldInput = {
  connect?: InputMaybe<FeedingScheduleGiverConnectFieldInput>;
  create?: InputMaybe<FeedingScheduleGiverCreateFieldInput>;
  delete?: InputMaybe<FeedingScheduleGiverDeleteFieldInput>;
  disconnect?: InputMaybe<FeedingScheduleGiverDisconnectFieldInput>;
  update?: InputMaybe<FeedingScheduleGiverUpdateConnectionInput>;
  where?: InputMaybe<FeedingScheduleGiverConnectionWhere>;
};

export type FeedingScheduleOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more FeedingScheduleSort objects to sort FeedingSchedules by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<FeedingScheduleSort>>>;
};

export type FeedingSchedulePetEaterAggregationSelection = {
  __typename?: 'FeedingSchedulePetEaterAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<FeedingSchedulePetEaterNodeAggregateSelection>;
};

export type FeedingSchedulePetEaterNodeAggregateSelection = {
  __typename?: 'FeedingSchedulePetEaterNodeAggregateSelection';
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type FeedingScheduleRelationInput = {
  eater?: InputMaybe<FeedingScheduleEaterCreateFieldInput>;
  giver?: InputMaybe<FeedingScheduleGiverCreateFieldInput>;
};

/** Fields to sort FeedingSchedules by. The order in which sorts are applied is not guaranteed when specifying many fields in one FeedingScheduleSort object. */
export type FeedingScheduleSort = {
  am_pm?: InputMaybe<SortDirection>;
  createAt?: InputMaybe<SortDirection>;
  feedingDate?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updateAt?: InputMaybe<SortDirection>;
};

export type FeedingScheduleUpdateInput = {
  am_pm?: InputMaybe<Scalars['String']>;
  eater?: InputMaybe<FeedingScheduleEaterUpdateFieldInput>;
  feedingDate?: InputMaybe<Scalars['DateTime']>;
  giver?: InputMaybe<FeedingScheduleGiverUpdateFieldInput>;
};

export type FeedingScheduleUserGiverAggregationSelection = {
  __typename?: 'FeedingScheduleUserGiverAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<FeedingScheduleUserGiverNodeAggregateSelection>;
};

export type FeedingScheduleUserGiverNodeAggregateSelection = {
  __typename?: 'FeedingScheduleUserGiverNodeAggregateSelection';
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type FeedingScheduleWhere = {
  AND?: InputMaybe<Array<FeedingScheduleWhere>>;
  OR?: InputMaybe<Array<FeedingScheduleWhere>>;
  am_pm?: InputMaybe<Scalars['String']>;
  am_pm_CONTAINS?: InputMaybe<Scalars['String']>;
  am_pm_ENDS_WITH?: InputMaybe<Scalars['String']>;
  am_pm_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  am_pm_NOT?: InputMaybe<Scalars['String']>;
  am_pm_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  am_pm_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  am_pm_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  am_pm_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  am_pm_STARTS_WITH?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eater?: InputMaybe<PetWhere>;
  eaterAggregate?: InputMaybe<FeedingScheduleEaterAggregateInput>;
  eaterConnection?: InputMaybe<FeedingScheduleEaterConnectionWhere>;
  eaterConnection_NOT?: InputMaybe<FeedingScheduleEaterConnectionWhere>;
  eater_NOT?: InputMaybe<PetWhere>;
  feedingDate?: InputMaybe<Scalars['DateTime']>;
  feedingDate_GT?: InputMaybe<Scalars['DateTime']>;
  feedingDate_GTE?: InputMaybe<Scalars['DateTime']>;
  feedingDate_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  feedingDate_LT?: InputMaybe<Scalars['DateTime']>;
  feedingDate_LTE?: InputMaybe<Scalars['DateTime']>;
  feedingDate_NOT?: InputMaybe<Scalars['DateTime']>;
  feedingDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  giver?: InputMaybe<UserWhere>;
  giverAggregate?: InputMaybe<FeedingScheduleGiverAggregateInput>;
  giverConnection?: InputMaybe<FeedingScheduleGiverConnectionWhere>;
  giverConnection_NOT?: InputMaybe<FeedingScheduleGiverConnectionWhere>;
  giver_NOT?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** Fields to sort Feedings by. The order in which sorts are applied is not guaranteed when specifying many fields in one FeedingSort object. */
export type FeedingSort = {
  am_pm?: InputMaybe<SortDirection>;
  createAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updateAt?: InputMaybe<SortDirection>;
};

export type FeedingUpdateInput = {
  am_pm?: InputMaybe<Scalars['String']>;
  eater?: InputMaybe<FeedingEaterUpdateFieldInput>;
  giver?: InputMaybe<FeedingGiverUpdateFieldInput>;
};

export type FeedingUserGiverAggregationSelection = {
  __typename?: 'FeedingUserGiverAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<FeedingUserGiverNodeAggregateSelection>;
};

export type FeedingUserGiverNodeAggregateSelection = {
  __typename?: 'FeedingUserGiverNodeAggregateSelection';
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type FeedingWhere = {
  AND?: InputMaybe<Array<FeedingWhere>>;
  OR?: InputMaybe<Array<FeedingWhere>>;
  am_pm?: InputMaybe<Scalars['String']>;
  am_pm_CONTAINS?: InputMaybe<Scalars['String']>;
  am_pm_ENDS_WITH?: InputMaybe<Scalars['String']>;
  am_pm_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  am_pm_NOT?: InputMaybe<Scalars['String']>;
  am_pm_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  am_pm_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  am_pm_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  am_pm_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  am_pm_STARTS_WITH?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eater?: InputMaybe<PetWhere>;
  eaterAggregate?: InputMaybe<FeedingEaterAggregateInput>;
  eaterConnection?: InputMaybe<FeedingEaterConnectionWhere>;
  eaterConnection_NOT?: InputMaybe<FeedingEaterConnectionWhere>;
  eater_NOT?: InputMaybe<PetWhere>;
  giver?: InputMaybe<UserWhere>;
  giverAggregate?: InputMaybe<FeedingGiverAggregateInput>;
  giverConnection?: InputMaybe<FeedingGiverConnectionWhere>;
  giverConnection_NOT?: InputMaybe<FeedingGiverConnectionWhere>;
  giver_NOT?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFeedingSchedules: CreateFeedingSchedulesMutationResponse;
  createFeedings: CreateFeedingsMutationResponse;
  createPets: CreatePetsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteFeedingSchedules: DeleteInfo;
  deleteFeedings: DeleteInfo;
  deletePets: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateFeedingSchedules: UpdateFeedingSchedulesMutationResponse;
  updateFeedings: UpdateFeedingsMutationResponse;
  updatePets: UpdatePetsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateFeedingSchedulesArgs = {
  input: Array<FeedingScheduleCreateInput>;
};


export type MutationCreateFeedingsArgs = {
  input: Array<FeedingCreateInput>;
};


export type MutationCreatePetsArgs = {
  input: Array<PetCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteFeedingSchedulesArgs = {
  delete?: InputMaybe<FeedingScheduleDeleteInput>;
  where?: InputMaybe<FeedingScheduleWhere>;
};


export type MutationDeleteFeedingsArgs = {
  delete?: InputMaybe<FeedingDeleteInput>;
  where?: InputMaybe<FeedingWhere>;
};


export type MutationDeletePetsArgs = {
  delete?: InputMaybe<PetDeleteInput>;
  where?: InputMaybe<PetWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateFeedingSchedulesArgs = {
  connect?: InputMaybe<FeedingScheduleConnectInput>;
  create?: InputMaybe<FeedingScheduleRelationInput>;
  delete?: InputMaybe<FeedingScheduleDeleteInput>;
  disconnect?: InputMaybe<FeedingScheduleDisconnectInput>;
  update?: InputMaybe<FeedingScheduleUpdateInput>;
  where?: InputMaybe<FeedingScheduleWhere>;
};


export type MutationUpdateFeedingsArgs = {
  connect?: InputMaybe<FeedingConnectInput>;
  create?: InputMaybe<FeedingRelationInput>;
  delete?: InputMaybe<FeedingDeleteInput>;
  disconnect?: InputMaybe<FeedingDisconnectInput>;
  update?: InputMaybe<FeedingUpdateInput>;
  where?: InputMaybe<FeedingWhere>;
};


export type MutationUpdatePetsArgs = {
  connect?: InputMaybe<PetConnectInput>;
  create?: InputMaybe<PetRelationInput>;
  delete?: InputMaybe<PetDeleteInput>;
  disconnect?: InputMaybe<PetDisconnectInput>;
  update?: InputMaybe<PetUpdateInput>;
  where?: InputMaybe<PetWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Pet = {
  __typename?: 'Pet';
  createAt: Scalars['DateTime'];
  eating?: Maybe<Array<Maybe<Feeding>>>;
  eatingAggregate?: Maybe<PetFeedingEatingAggregationSelection>;
  eatingConnection: PetEatingConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  updateAt?: Maybe<Scalars['DateTime']>;
};


export type PetEatingArgs = {
  options?: InputMaybe<FeedingOptions>;
  where?: InputMaybe<FeedingWhere>;
};


export type PetEatingAggregateArgs = {
  where?: InputMaybe<FeedingWhere>;
};


export type PetEatingConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PetEatingConnectionSort>>;
  where?: InputMaybe<PetEatingConnectionWhere>;
};

export type PetAggregateSelection = {
  __typename?: 'PetAggregateSelection';
  count: Scalars['Int'];
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type PetConnectInput = {
  eating?: InputMaybe<Array<PetEatingConnectFieldInput>>;
};

export type PetConnectWhere = {
  node: PetWhere;
};

export type PetCreateInput = {
  eating?: InputMaybe<PetEatingFieldInput>;
  name: Scalars['String'];
};

export type PetDeleteInput = {
  eating?: InputMaybe<Array<PetEatingDeleteFieldInput>>;
};

export type PetDisconnectInput = {
  eating?: InputMaybe<Array<PetEatingDisconnectFieldInput>>;
};

export type PetEatingAggregateInput = {
  AND?: InputMaybe<Array<PetEatingAggregateInput>>;
  OR?: InputMaybe<Array<PetEatingAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PetEatingNodeAggregationWhereInput>;
};

export type PetEatingConnectFieldInput = {
  connect?: InputMaybe<Array<FeedingConnectInput>>;
  where?: InputMaybe<FeedingConnectWhere>;
};

export type PetEatingConnection = {
  __typename?: 'PetEatingConnection';
  edges: Array<PetEatingRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PetEatingConnectionSort = {
  node?: InputMaybe<FeedingSort>;
};

export type PetEatingConnectionWhere = {
  AND?: InputMaybe<Array<PetEatingConnectionWhere>>;
  OR?: InputMaybe<Array<PetEatingConnectionWhere>>;
  node?: InputMaybe<FeedingWhere>;
  node_NOT?: InputMaybe<FeedingWhere>;
};

export type PetEatingCreateFieldInput = {
  node: FeedingCreateInput;
};

export type PetEatingDeleteFieldInput = {
  delete?: InputMaybe<FeedingDeleteInput>;
  where?: InputMaybe<PetEatingConnectionWhere>;
};

export type PetEatingDisconnectFieldInput = {
  disconnect?: InputMaybe<FeedingDisconnectInput>;
  where?: InputMaybe<PetEatingConnectionWhere>;
};

export type PetEatingFieldInput = {
  connect?: InputMaybe<Array<PetEatingConnectFieldInput>>;
  create?: InputMaybe<Array<PetEatingCreateFieldInput>>;
};

export type PetEatingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PetEatingNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PetEatingNodeAggregationWhereInput>>;
  am_pm_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  am_pm_EQUAL?: InputMaybe<Scalars['String']>;
  am_pm_GT?: InputMaybe<Scalars['Int']>;
  am_pm_GTE?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  am_pm_LT?: InputMaybe<Scalars['Int']>;
  am_pm_LTE?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  updateAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type PetEatingRelationship = {
  __typename?: 'PetEatingRelationship';
  cursor: Scalars['String'];
  node: Feeding;
};

export type PetEatingUpdateConnectionInput = {
  node?: InputMaybe<FeedingUpdateInput>;
};

export type PetEatingUpdateFieldInput = {
  connect?: InputMaybe<Array<PetEatingConnectFieldInput>>;
  create?: InputMaybe<Array<PetEatingCreateFieldInput>>;
  delete?: InputMaybe<Array<PetEatingDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PetEatingDisconnectFieldInput>>;
  update?: InputMaybe<PetEatingUpdateConnectionInput>;
  where?: InputMaybe<PetEatingConnectionWhere>;
};

export type PetFeedingEatingAggregationSelection = {
  __typename?: 'PetFeedingEatingAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PetFeedingEatingNodeAggregateSelection>;
};

export type PetFeedingEatingNodeAggregateSelection = {
  __typename?: 'PetFeedingEatingNodeAggregateSelection';
  am_pm: StringAggregateSelection;
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type PetOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PetSort objects to sort Pets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PetSort>>>;
};

export type PetRelationInput = {
  eating?: InputMaybe<Array<PetEatingCreateFieldInput>>;
};

/** Fields to sort Pets by. The order in which sorts are applied is not guaranteed when specifying many fields in one PetSort object. */
export type PetSort = {
  createAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updateAt?: InputMaybe<SortDirection>;
};

export type PetUpdateInput = {
  eating?: InputMaybe<Array<PetEatingUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type PetWhere = {
  AND?: InputMaybe<Array<PetWhere>>;
  OR?: InputMaybe<Array<PetWhere>>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eating?: InputMaybe<FeedingWhere>;
  eatingAggregate?: InputMaybe<PetEatingAggregateInput>;
  eatingConnection?: InputMaybe<PetEatingConnectionWhere>;
  eatingConnection_NOT?: InputMaybe<PetEatingConnectionWhere>;
  eating_NOT?: InputMaybe<FeedingWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Query = {
  __typename?: 'Query';
  feedingSchedules: Array<FeedingSchedule>;
  feedingSchedulesAggregate: FeedingScheduleAggregateSelection;
  feedingSchedulesCount: Scalars['Int'];
  feedings: Array<Feeding>;
  feedingsAggregate: FeedingAggregateSelection;
  feedingsCount: Scalars['Int'];
  pets: Array<Pet>;
  petsAggregate: PetAggregateSelection;
  petsCount: Scalars['Int'];
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersCount: Scalars['Int'];
};


export type QueryFeedingSchedulesArgs = {
  options?: InputMaybe<FeedingScheduleOptions>;
  where?: InputMaybe<FeedingScheduleWhere>;
};


export type QueryFeedingSchedulesAggregateArgs = {
  where?: InputMaybe<FeedingScheduleWhere>;
};


export type QueryFeedingSchedulesCountArgs = {
  where?: InputMaybe<FeedingScheduleWhere>;
};


export type QueryFeedingsArgs = {
  options?: InputMaybe<FeedingOptions>;
  where?: InputMaybe<FeedingWhere>;
};


export type QueryFeedingsAggregateArgs = {
  where?: InputMaybe<FeedingWhere>;
};


export type QueryFeedingsCountArgs = {
  where?: InputMaybe<FeedingWhere>;
};


export type QueryPetsArgs = {
  options?: InputMaybe<PetOptions>;
  where?: InputMaybe<PetWhere>;
};


export type QueryPetsAggregateArgs = {
  where?: InputMaybe<PetWhere>;
};


export type QueryPetsCountArgs = {
  where?: InputMaybe<PetWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type UpdateFeedingSchedulesMutationResponse = {
  __typename?: 'UpdateFeedingSchedulesMutationResponse';
  feedingSchedules: Array<FeedingSchedule>;
  info: UpdateInfo;
};

export type UpdateFeedingsMutationResponse = {
  __typename?: 'UpdateFeedingsMutationResponse';
  feedings: Array<Feeding>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdatePetsMutationResponse = {
  __typename?: 'UpdatePetsMutationResponse';
  info: UpdateInfo;
  pets: Array<Pet>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createAt: Scalars['DateTime'];
  feeding?: Maybe<Array<Maybe<Feeding>>>;
  feedingAggregate?: Maybe<UserFeedingFeedingAggregationSelection>;
  feedingConnection: UserFeedingConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  updateAt?: Maybe<Scalars['DateTime']>;
};


export type UserFeedingArgs = {
  options?: InputMaybe<FeedingOptions>;
  where?: InputMaybe<FeedingWhere>;
};


export type UserFeedingAggregateArgs = {
  where?: InputMaybe<FeedingWhere>;
};


export type UserFeedingConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserFeedingConnectionSort>>;
  where?: InputMaybe<UserFeedingConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type UserConnectInput = {
  feeding?: InputMaybe<Array<UserFeedingConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  feeding?: InputMaybe<UserFeedingFieldInput>;
  name: Scalars['String'];
};

export type UserDeleteInput = {
  feeding?: InputMaybe<Array<UserFeedingDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  feeding?: InputMaybe<Array<UserFeedingDisconnectFieldInput>>;
};

export type UserFeedingAggregateInput = {
  AND?: InputMaybe<Array<UserFeedingAggregateInput>>;
  OR?: InputMaybe<Array<UserFeedingAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<UserFeedingNodeAggregationWhereInput>;
};

export type UserFeedingConnectFieldInput = {
  connect?: InputMaybe<Array<FeedingConnectInput>>;
  where?: InputMaybe<FeedingConnectWhere>;
};

export type UserFeedingConnection = {
  __typename?: 'UserFeedingConnection';
  edges: Array<UserFeedingRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFeedingConnectionSort = {
  node?: InputMaybe<FeedingSort>;
};

export type UserFeedingConnectionWhere = {
  AND?: InputMaybe<Array<UserFeedingConnectionWhere>>;
  OR?: InputMaybe<Array<UserFeedingConnectionWhere>>;
  node?: InputMaybe<FeedingWhere>;
  node_NOT?: InputMaybe<FeedingWhere>;
};

export type UserFeedingCreateFieldInput = {
  node: FeedingCreateInput;
};

export type UserFeedingDeleteFieldInput = {
  delete?: InputMaybe<FeedingDeleteInput>;
  where?: InputMaybe<UserFeedingConnectionWhere>;
};

export type UserFeedingDisconnectFieldInput = {
  disconnect?: InputMaybe<FeedingDisconnectInput>;
  where?: InputMaybe<UserFeedingConnectionWhere>;
};

export type UserFeedingFeedingAggregationSelection = {
  __typename?: 'UserFeedingFeedingAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UserFeedingFeedingNodeAggregateSelection>;
};

export type UserFeedingFeedingNodeAggregateSelection = {
  __typename?: 'UserFeedingFeedingNodeAggregateSelection';
  am_pm: StringAggregateSelection;
  createAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  updateAt: DateTimeAggregateSelection;
};

export type UserFeedingFieldInput = {
  connect?: InputMaybe<Array<UserFeedingConnectFieldInput>>;
  create?: InputMaybe<Array<UserFeedingCreateFieldInput>>;
};

export type UserFeedingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserFeedingNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserFeedingNodeAggregationWhereInput>>;
  am_pm_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  am_pm_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  am_pm_EQUAL?: InputMaybe<Scalars['String']>;
  am_pm_GT?: InputMaybe<Scalars['Int']>;
  am_pm_GTE?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  am_pm_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  am_pm_LT?: InputMaybe<Scalars['Int']>;
  am_pm_LTE?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  am_pm_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  updateAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type UserFeedingRelationship = {
  __typename?: 'UserFeedingRelationship';
  cursor: Scalars['String'];
  node: Feeding;
};

export type UserFeedingUpdateConnectionInput = {
  node?: InputMaybe<FeedingUpdateInput>;
};

export type UserFeedingUpdateFieldInput = {
  connect?: InputMaybe<Array<UserFeedingConnectFieldInput>>;
  create?: InputMaybe<Array<UserFeedingCreateFieldInput>>;
  delete?: InputMaybe<Array<UserFeedingDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserFeedingDisconnectFieldInput>>;
  update?: InputMaybe<UserFeedingUpdateConnectionInput>;
  where?: InputMaybe<UserFeedingConnectionWhere>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type UserRelationInput = {
  feeding?: InputMaybe<Array<UserFeedingCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updateAt?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  feeding?: InputMaybe<Array<UserFeedingUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  OR?: InputMaybe<Array<UserWhere>>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  createAt_GT?: InputMaybe<Scalars['DateTime']>;
  createAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createAt_LT?: InputMaybe<Scalars['DateTime']>;
  createAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  feeding?: InputMaybe<FeedingWhere>;
  feedingAggregate?: InputMaybe<UserFeedingAggregateInput>;
  feedingConnection?: InputMaybe<UserFeedingConnectionWhere>;
  feedingConnection_NOT?: InputMaybe<UserFeedingConnectionWhere>;
  feeding_NOT?: InputMaybe<FeedingWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
  updateAt_GT?: InputMaybe<Scalars['DateTime']>;
  updateAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updateAt_LT?: InputMaybe<Scalars['DateTime']>;
  updateAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updateAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type FeedingCheckQueryVariables = Exact<{
  where?: InputMaybe<FeedingWhere>;
}>;


export type FeedingCheckQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', id: string, name: string }>, users: Array<{ __typename?: 'User', id: string, name: string }>, feedings: Array<{ __typename?: 'Feeding', id: string, am_pm: string, createAt: any, updateAt?: any | null | undefined, giver: { __typename?: 'User', id: string, name: string }, eater: { __typename?: 'Pet', id: string, name: string } }> };

export type CreateFeedingsMutationVariables = Exact<{
  input: Array<FeedingCreateInput> | FeedingCreateInput;
}>;


export type CreateFeedingsMutation = { __typename?: 'Mutation', createFeedings: { __typename?: 'CreateFeedingsMutationResponse', info: { __typename?: 'CreateInfo', nodesCreated: number }, feedings: Array<{ __typename?: 'Feeding', id: string, am_pm: string, createAt: any, updateAt?: any | null | undefined, giver: { __typename?: 'User', id: string, name: string }, eater: { __typename?: 'Pet', id: string, name: string } }> } };

export type FeedingScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedingScheduleQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', id: string, name: string }>, users: Array<{ __typename?: 'User', id: string, name: string }> };

export type PetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PetsQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', id: string, name: string, eatingAggregate?: { __typename?: 'PetFeedingEatingAggregationSelection', count: number } | null | undefined }> };

export type CreatePetsMutationVariables = Exact<{
  input: Array<PetCreateInput> | PetCreateInput;
}>;


export type CreatePetsMutation = { __typename?: 'Mutation', createPets: { __typename?: 'CreatePetsMutationResponse', pets: Array<{ __typename?: 'Pet', id: string, name: string, createAt: any }>, info: { __typename?: 'CreateInfo', nodesCreated: number } } };

export type DeletePetsMutationVariables = Exact<{
  where?: InputMaybe<PetWhere>;
}>;


export type DeletePetsMutation = { __typename?: 'Mutation', deletePets: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type UpdatePetsMutationVariables = Exact<{
  where?: InputMaybe<PetWhere>;
  update?: InputMaybe<PetUpdateInput>;
}>;


export type UpdatePetsMutation = { __typename?: 'Mutation', updatePets: { __typename?: 'UpdatePetsMutationResponse', pets: Array<{ __typename?: 'Pet', id: string, name: string, updateAt?: any | null | undefined }> } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, feedingAggregate?: { __typename?: 'UserFeedingFeedingAggregationSelection', count: number } | null | undefined }> };

export type UsersPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersPetsQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, feedingAggregate?: { __typename?: 'UserFeedingFeedingAggregationSelection', count: number } | null | undefined }>, pets: Array<{ __typename?: 'Pet', id: string, name: string, eatingAggregate?: { __typename?: 'PetFeedingEatingAggregationSelection', count: number } | null | undefined }> };

export type CreateUsersMutationVariables = Exact<{
  input: Array<UserCreateInput> | UserCreateInput;
}>;


export type CreateUsersMutation = { __typename?: 'Mutation', createUsers: { __typename?: 'CreateUsersMutationResponse', users: Array<{ __typename?: 'User', id: string, name: string, createAt: any }> } };

export type DeleteUsersMutationVariables = Exact<{
  where?: InputMaybe<UserWhere>;
}>;


export type DeleteUsersMutation = { __typename?: 'Mutation', deleteUsers: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type UpdateUsersMutationVariables = Exact<{
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
}>;


export type UpdateUsersMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', id: string, name: string, createAt: any, updateAt?: any | null | undefined }> } };


export const FeedingCheckDocument = gql`
    query FeedingCheck($where: FeedingWhere) {
  pets {
    id
    name
  }
  users {
    id
    name
  }
  feedings(where: $where) {
    id
    am_pm
    createAt
    updateAt
    giver {
      id
      name
    }
    eater {
      id
      name
    }
  }
}
    `;

/**
 * __useFeedingCheckQuery__
 *
 * To run a query within a React component, call `useFeedingCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedingCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedingCheckQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFeedingCheckQuery(baseOptions?: Apollo.QueryHookOptions<FeedingCheckQuery, FeedingCheckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedingCheckQuery, FeedingCheckQueryVariables>(FeedingCheckDocument, options);
      }
export function useFeedingCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedingCheckQuery, FeedingCheckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedingCheckQuery, FeedingCheckQueryVariables>(FeedingCheckDocument, options);
        }
export type FeedingCheckQueryHookResult = ReturnType<typeof useFeedingCheckQuery>;
export type FeedingCheckLazyQueryHookResult = ReturnType<typeof useFeedingCheckLazyQuery>;
export type FeedingCheckQueryResult = Apollo.QueryResult<FeedingCheckQuery, FeedingCheckQueryVariables>;
export const CreateFeedingsDocument = gql`
    mutation CreateFeedings($input: [FeedingCreateInput!]!) {
  createFeedings(input: $input) {
    info {
      nodesCreated
    }
    feedings {
      id
      am_pm
      createAt
      updateAt
      giver {
        id
        name
      }
      eater {
        id
        name
      }
    }
  }
}
    `;
export type CreateFeedingsMutationFn = Apollo.MutationFunction<CreateFeedingsMutation, CreateFeedingsMutationVariables>;

/**
 * __useCreateFeedingsMutation__
 *
 * To run a mutation, you first call `useCreateFeedingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFeedingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFeedingsMutation, { data, loading, error }] = useCreateFeedingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFeedingsMutation(baseOptions?: Apollo.MutationHookOptions<CreateFeedingsMutation, CreateFeedingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFeedingsMutation, CreateFeedingsMutationVariables>(CreateFeedingsDocument, options);
      }
export type CreateFeedingsMutationHookResult = ReturnType<typeof useCreateFeedingsMutation>;
export type CreateFeedingsMutationResult = Apollo.MutationResult<CreateFeedingsMutation>;
export type CreateFeedingsMutationOptions = Apollo.BaseMutationOptions<CreateFeedingsMutation, CreateFeedingsMutationVariables>;
export const FeedingScheduleDocument = gql`
    query FeedingSchedule {
  pets {
    id
    name
  }
  users {
    id
    name
  }
}
    `;

/**
 * __useFeedingScheduleQuery__
 *
 * To run a query within a React component, call `useFeedingScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedingScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedingScheduleQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedingScheduleQuery(baseOptions?: Apollo.QueryHookOptions<FeedingScheduleQuery, FeedingScheduleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedingScheduleQuery, FeedingScheduleQueryVariables>(FeedingScheduleDocument, options);
      }
export function useFeedingScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedingScheduleQuery, FeedingScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedingScheduleQuery, FeedingScheduleQueryVariables>(FeedingScheduleDocument, options);
        }
export type FeedingScheduleQueryHookResult = ReturnType<typeof useFeedingScheduleQuery>;
export type FeedingScheduleLazyQueryHookResult = ReturnType<typeof useFeedingScheduleLazyQuery>;
export type FeedingScheduleQueryResult = Apollo.QueryResult<FeedingScheduleQuery, FeedingScheduleQueryVariables>;
export const PetsDocument = gql`
    query Pets {
  pets {
    id
    name
    eatingAggregate {
      count
    }
  }
}
    `;

/**
 * __usePetsQuery__
 *
 * To run a query within a React component, call `usePetsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePetsQuery(baseOptions?: Apollo.QueryHookOptions<PetsQuery, PetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PetsQuery, PetsQueryVariables>(PetsDocument, options);
      }
export function usePetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PetsQuery, PetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PetsQuery, PetsQueryVariables>(PetsDocument, options);
        }
export type PetsQueryHookResult = ReturnType<typeof usePetsQuery>;
export type PetsLazyQueryHookResult = ReturnType<typeof usePetsLazyQuery>;
export type PetsQueryResult = Apollo.QueryResult<PetsQuery, PetsQueryVariables>;
export const CreatePetsDocument = gql`
    mutation CreatePets($input: [PetCreateInput!]!) {
  createPets(input: $input) {
    pets {
      id
      name
      createAt
    }
    info {
      nodesCreated
    }
  }
}
    `;
export type CreatePetsMutationFn = Apollo.MutationFunction<CreatePetsMutation, CreatePetsMutationVariables>;

/**
 * __useCreatePetsMutation__
 *
 * To run a mutation, you first call `useCreatePetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPetsMutation, { data, loading, error }] = useCreatePetsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePetsMutation(baseOptions?: Apollo.MutationHookOptions<CreatePetsMutation, CreatePetsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePetsMutation, CreatePetsMutationVariables>(CreatePetsDocument, options);
      }
export type CreatePetsMutationHookResult = ReturnType<typeof useCreatePetsMutation>;
export type CreatePetsMutationResult = Apollo.MutationResult<CreatePetsMutation>;
export type CreatePetsMutationOptions = Apollo.BaseMutationOptions<CreatePetsMutation, CreatePetsMutationVariables>;
export const DeletePetsDocument = gql`
    mutation DeletePets($where: PetWhere) {
  deletePets(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeletePetsMutationFn = Apollo.MutationFunction<DeletePetsMutation, DeletePetsMutationVariables>;

/**
 * __useDeletePetsMutation__
 *
 * To run a mutation, you first call `useDeletePetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePetsMutation, { data, loading, error }] = useDeletePetsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePetsMutation(baseOptions?: Apollo.MutationHookOptions<DeletePetsMutation, DeletePetsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePetsMutation, DeletePetsMutationVariables>(DeletePetsDocument, options);
      }
export type DeletePetsMutationHookResult = ReturnType<typeof useDeletePetsMutation>;
export type DeletePetsMutationResult = Apollo.MutationResult<DeletePetsMutation>;
export type DeletePetsMutationOptions = Apollo.BaseMutationOptions<DeletePetsMutation, DeletePetsMutationVariables>;
export const UpdatePetsDocument = gql`
    mutation UpdatePets($where: PetWhere, $update: PetUpdateInput) {
  updatePets(where: $where, update: $update) {
    pets {
      id
      name
      updateAt
    }
  }
}
    `;
export type UpdatePetsMutationFn = Apollo.MutationFunction<UpdatePetsMutation, UpdatePetsMutationVariables>;

/**
 * __useUpdatePetsMutation__
 *
 * To run a mutation, you first call `useUpdatePetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePetsMutation, { data, loading, error }] = useUpdatePetsMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdatePetsMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePetsMutation, UpdatePetsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePetsMutation, UpdatePetsMutationVariables>(UpdatePetsDocument, options);
      }
export type UpdatePetsMutationHookResult = ReturnType<typeof useUpdatePetsMutation>;
export type UpdatePetsMutationResult = Apollo.MutationResult<UpdatePetsMutation>;
export type UpdatePetsMutationOptions = Apollo.BaseMutationOptions<UpdatePetsMutation, UpdatePetsMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    feedingAggregate {
      count
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UsersPetsDocument = gql`
    query UsersPets {
  users {
    id
    name
    feedingAggregate {
      count
    }
  }
  pets {
    id
    name
    eatingAggregate {
      count
    }
  }
}
    `;

/**
 * __useUsersPetsQuery__
 *
 * To run a query within a React component, call `useUsersPetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersPetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersPetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersPetsQuery(baseOptions?: Apollo.QueryHookOptions<UsersPetsQuery, UsersPetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersPetsQuery, UsersPetsQueryVariables>(UsersPetsDocument, options);
      }
export function useUsersPetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersPetsQuery, UsersPetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersPetsQuery, UsersPetsQueryVariables>(UsersPetsDocument, options);
        }
export type UsersPetsQueryHookResult = ReturnType<typeof useUsersPetsQuery>;
export type UsersPetsLazyQueryHookResult = ReturnType<typeof useUsersPetsLazyQuery>;
export type UsersPetsQueryResult = Apollo.QueryResult<UsersPetsQuery, UsersPetsQueryVariables>;
export const CreateUsersDocument = gql`
    mutation CreateUsers($input: [UserCreateInput!]!) {
  createUsers(input: $input) {
    users {
      id
      name
      createAt
    }
  }
}
    `;
export type CreateUsersMutationFn = Apollo.MutationFunction<CreateUsersMutation, CreateUsersMutationVariables>;

/**
 * __useCreateUsersMutation__
 *
 * To run a mutation, you first call `useCreateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsersMutation, { data, loading, error }] = useCreateUsersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUsersMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsersMutation, CreateUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsersMutation, CreateUsersMutationVariables>(CreateUsersDocument, options);
      }
export type CreateUsersMutationHookResult = ReturnType<typeof useCreateUsersMutation>;
export type CreateUsersMutationResult = Apollo.MutationResult<CreateUsersMutation>;
export type CreateUsersMutationOptions = Apollo.BaseMutationOptions<CreateUsersMutation, CreateUsersMutationVariables>;
export const DeleteUsersDocument = gql`
    mutation DeleteUsers($where: UserWhere) {
  deleteUsers(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteUsersMutationFn = Apollo.MutationFunction<DeleteUsersMutation, DeleteUsersMutationVariables>;

/**
 * __useDeleteUsersMutation__
 *
 * To run a mutation, you first call `useDeleteUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUsersMutation, { data, loading, error }] = useDeleteUsersMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteUsersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUsersMutation, DeleteUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUsersMutation, DeleteUsersMutationVariables>(DeleteUsersDocument, options);
      }
export type DeleteUsersMutationHookResult = ReturnType<typeof useDeleteUsersMutation>;
export type DeleteUsersMutationResult = Apollo.MutationResult<DeleteUsersMutation>;
export type DeleteUsersMutationOptions = Apollo.BaseMutationOptions<DeleteUsersMutation, DeleteUsersMutationVariables>;
export const UpdateUsersDocument = gql`
    mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
  updateUsers(where: $where, update: $update) {
    users {
      id
      name
      createAt
      updateAt
    }
  }
}
    `;
export type UpdateUsersMutationFn = Apollo.MutationFunction<UpdateUsersMutation, UpdateUsersMutationVariables>;

/**
 * __useUpdateUsersMutation__
 *
 * To run a mutation, you first call `useUpdateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersMutation, { data, loading, error }] = useUpdateUsersMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateUsersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsersMutation, UpdateUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsersMutation, UpdateUsersMutationVariables>(UpdateUsersDocument, options);
      }
export type UpdateUsersMutationHookResult = ReturnType<typeof useUpdateUsersMutation>;
export type UpdateUsersMutationResult = Apollo.MutationResult<UpdateUsersMutation>;
export type UpdateUsersMutationOptions = Apollo.BaseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables>;