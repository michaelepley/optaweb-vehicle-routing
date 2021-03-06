/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ActionType, FinishLoadingAction, RequestDemoAction, StartLoadingAction } from './types';

export const requestDemo = (): RequestDemoAction => ({
  type: ActionType.REQUEST_DEMO,
});

export const startLoading = (size: number): StartLoadingAction => ({
  type: ActionType.START_LOADING,
  size,
});

export const finishLoading = (): FinishLoadingAction => ({
  type: ActionType.FINISH_LOADING,
});
