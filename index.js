/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

// TODO: Add changelog entry about removed deprecated features
import extend from './lib/extend.js';
import transform from './lib/common/transforms.js';
import transformGroup from './lib/common/transformGroups.js';
import format from './lib/common/formats.js';
import action from './lib/common/actions.js';
import * as formatHelpers from './lib/common/formatHelpers/index.js';
import filter from './lib/common/filters.js';
import registerTransform from './lib/register/transform.js';
import registerTransformGroup from './lib/register/transformGroup.js';
import registerFormat from './lib/register/format.js';
import registerAction from './lib/register/action.js';
import registerFilter from './lib/register/filter.js';
import registerParser from './lib/register/parser.js';
import registerFileHeader from './lib/register/fileHeader.js';
import exportPlatform from './lib/exportPlatform.js';
import buildPlatform from './lib/buildPlatform.js';
import buildAllPlatforms from './lib/buildAllPlatforms.js';
import cleanPlatform from './lib/cleanPlatform.js';
import cleanAllPlatforms from './lib/cleanAllPlatforms.js';

// const TEMPLATE_DEPRECATION_WARNINGS = GroupMessages.GROUP.TemplateDeprecationWarnings;
// const REGISTER_TEMPLATE_DEPRECATION_WARNINGS = GroupMessages.GROUP.RegisterTemplateDeprecationWarnings;
// const SASS_MAP_FORMAT_DEPRECATION_WARNINGS = GroupMessages.GROUP.SassMapFormatDeprecationWarnings;

// Allow to be overridden by setter, set default to memfs for browser env, node:fs for node env
export let fs =
  typeof window === 'object'
    ? (await import('@bundled-es-modules/memfs')).default
    : (await import(/** webpackIgnore: true */ 'node:fs')).default;

// since ES modules exports are read-only, use a setter
export const setFs = (_fs) => {
  fs = _fs;
};

/**
 * Style Dictionary module
 *
 * @module style-dictionary
 * @typicalname StyleDictionary
 * @example
 * ```js
 * import StyleDictionary from 'style-dictionary';
 * (await StyleDictionary.extend('config.json')).buildAllPlatforms();
 * ```
 */

export default {
  // TODO: @Joren Inject the right version here on prepublish, using a placeholder, fs.readFile won't work in browser, and fetch() does not work in Node for relative assets
  // Another option might be import pkg from './package.json' with { "type": "json" } which would work in both browser and node, but support is not there yet.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility
  VERSION: '4.0.0-prelease.0',
  tokens: {},
  allTokens: [],
  options: {},

  transform,
  transformGroup,
  format,
  action,
  formatHelpers,
  filter,
  parsers: [], // we need to initialise the array, since we don't have built-in parsers
  fileHeader: {},

  registerTransform,
  registerTransformGroup,
  registerFormat,
  registerAction,
  registerFilter,
  registerParser,
  registerFileHeader,

  exportPlatform,
  buildPlatform,
  buildAllPlatforms,

  cleanPlatform,
  cleanAllPlatforms,

  extend,
};
