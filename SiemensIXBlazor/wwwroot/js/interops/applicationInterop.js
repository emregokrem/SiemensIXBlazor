// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

export const setApplicationConfig = (id, config) => {
    const element = document.getElementById(id);
    element.appSwitchConfig = JSON.parse(config);
}