<!DOCTYPE html>
<html dir="ltr" lang="en" style="scroll-behavior: smooth">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <title>Esmerelda</title>
    <style>
      /* Copyright (C) Microsoft Corporation. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

      body {
        font-family: "system-ui", sans-serif;
        font-size: 14px;
        background-color: rgb(247, 247, 247);
        margin: 0;
      }

      @media (forced-colors: active) {
        ::placeholder {
          color: ButtonText !important;
        }
      }

      @media (forced-colors: none) {
        input::selection {
          color: #fff;
          background: #0078d4;
        }
      }

      @media (prefers-color-scheme: dark) {
        body {
          background-color: rgb(51, 51, 51);
        }
      }
      @media (forced-colors: none) and (prefers-color-scheme: dark) {
        input::selection {
          color: #000;
          /* RGBA because Blink applies an opacity otherwise */
          background: rgba(147, 184, 231, 0.996);
          opacity: 1;
        }
      }
    </style>
    <style>
      #modal-root {
        position: fixed;
      }
    </style>
    <style data-jss="" data-meta="MSFTButton">
      .c0160 {
        cursor: pointer;
        display: inline-flex;
        overflow: hidden;
        max-width: 374px;
        box-sizing: border-box;
        transition: all 0.1s ease-in-out;
        line-height: 1;
        font-family: inherit;
        align-items: center;
        white-space: nowrap;
        justify-content: center;
        text-decoration: none;
        font-size: 14px;
        min-width: 32px;
        padding: 0 8px;
        height: 32px;
        border: 2px solid transparent;
        border-radius: 2px;
        color: #2b2b2b;
        fill: #2b2b2b;
        background: #ededed;
      }
      .c0160:hover:enabled,
      a.c0160:not(.c0167):hover {
        background: #e5e5e5;
      }
      .c0160:active:enabled,
      a.c0160:not(.c0167):active {
        background: #f2f2f2;
      }
      .c0160:focus {
        outline: none;
      }
      .c0160:focus-visible {
        border-color: #888888;
      }
      .c0160:disabled {
      }
      .c0160::-moz-focus-inner {
        border: 0;
      }
      @media (-ms-high-contrast: active) {
        .c0160 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonText;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0160:not(.c0167) {
      }
      @media (-ms-high-contrast: active) {
        a.c0160:not(.c0167) {
          fill: LinkText !important;
          color: LinkText !important;
          background: Window;
          border-color: LinkText !important;
        }
      }
      a.c0160:not(.c0167):not(.c0167):hover {
      }
      a.c0160:not(.c0167).c0167 {
      }
      @media (-ms-high-contrast: active) {
        a.c0160:not(.c0167).c0167 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      a.c0160:not(.c0167).c0167:hover {
      }
      @media (-ms-high-contrast: active) {
        a.c0160:not(.c0167).c0167:hover {
          box-shadow: none !important;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0160:not(.c0167):not(.c0167):hover {
          background: ButtonFace;
          box-shadow: 0 0 0 1px inset LinkText !important;
        }
      }
      a.c0160:not(.c0167):not(.c0167):hover .c0171,
      a.c0160:not(.c0167):not(.c0167):hover .c0172 {
      }
      @media (-ms-high-contrast: active) {
        a.c0160:not(.c0167):not(.c0167):hover .c0171,
        a.c0160:not(.c0167):not(.c0167):hover .c0172 {
          fill: LinkText !important;
          color: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0160:disabled {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0160:focus-visible {
          border-color: ButtonText;
          box-shadow: 0 0 0 1px inset ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0160:hover:enabled,
        a.c0160:not(.c0167):hover {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
        }
      }
      .c0160:hover:enabled .c0171,
      .c0160:hover:enabled .c0172,
      a.c0160:not(.c0167):hover .c0171,
      a.c0160:not(.c0167):hover .c0172 {
      }
      @media (-ms-high-contrast: active) {
        .c0160:hover:enabled .c0171,
        .c0160:hover:enabled .c0172,
        a.c0160:not(.c0167):hover .c0171,
        a.c0160:not(.c0167):hover .c0172 {
          fill: HighlightText !important;
          color: HighlightText !important;
        }
      }
      .c0161 {
        color: #ffffff;
        fill: #ffffff;
        background: #0078d4;
      }
      .c0161:hover:enabled,
      a.c0161:not(.c0167):hover {
        background: #006cbe;
      }
      .c0161:active:enabled,
      a.c0161:not(.c0167):active {
        background: #1683d8;
      }
      .c0161:focus {
        outline: none;
      }
      .c0161:focus-visible {
        border-color: #888888;
        box-shadow: 0 0 0 2px inset #ffffff;
      }
      .c0161 .c0171,
      .c0161 .c0172 {
        fill: #ffffff;
      }
      @media (-ms-high-contrast: active) {
        .c0161 {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
          border-color: Highlight;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0161:not(.c0167) {
      }
      a.c0161:not(.c0167) .c0171,
      a.c0161:not(.c0167) .c0172 {
      }
      @media (-ms-high-contrast: active) {
        a.c0161:not(.c0167) .c0171,
        a.c0161:not(.c0167) .c0172 {
          fill: LinkText !important;
          color: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0161:focus-visible {
          border-color: ButtonText !important;
          box-shadow: 0 0 0 2px inset ButtonFace;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0161:hover:enabled,
        a.c0161:not(.c0167):hover {
          fill: Highlight;
          color: Highlight;
          background: HighlightText;
          border-color: Highlight;
        }
      }
      .c0162 {
        background: transparent;
        border: 1px solid #bebebe;
        padding: 0 9px;
      }
      .c0162:hover:enabled,
      a.c0162:not(.c0167):hover {
        background: transparent;
        border: 1px solid #979797;
      }
      .c0162:active:enabled,
      a.c0162:not(.c0167):active {
        background: transparent;
        border: 1px solid #d6d6d6;
      }
      .c0162:focus {
        outline: none;
      }
      .c0162:focus-visible {
        box-shadow: 0 0 0 1px #888888 inset;
        border-color: #888888;
      }
      @media (-ms-high-contrast: active) {
        .c0162 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonText;
          -ms-high-contrast-adjust: none;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0162:focus-visible {
          border-color: ButtonText;
          box-shadow: 0 0 0 1px inset ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0162:hover:enabled,
        a.c0162:not(.c0167):hover {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
        }
      }
      .c0163 {
        background-color: transparent;
        color: #0078d4;
        fill: #0078d4;
      }
      .c0163:focus {
        outline: none;
      }
      .c0163:focus-visible {
        box-shadow: none;
        border-color: transparent;
      }
      .c0163 .c0166::before {
      }
      .c0163:hover .c0166::before {
        background: #0066b4;
      }
      .c0163:hover.c0167 .c0166::before {
        display: none;
      }
      .c0163:active .c0166::before {
        background: #1181d7;
      }
      .c0163.c0167,
      .c0163.c0167 .c0166::before {
        background-color: transparent;
      }
      .c0163:hover:enabled,
      a.c0163:not(.c0167):hover {
        background-color: transparent;
        color: #0066b4;
      }
      .c0163:active:enabled,
      a.c0163:not(.c0167):active {
        background-color: transparent;
        color: #1181d7;
        fill: #1181d7;
      }
      @media (-ms-high-contrast: active) {
        .c0163 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonFace;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0163:not(.c0167) {
      }
      a.c0163:not(.c0167):not(.c0167):hover {
      }
      a.c0163:not(.c0167).c0167 {
      }
      a.c0163:not(.c0167) .c0166::before {
      }
      @media (-ms-high-contrast: active) {
        a.c0163:not(.c0167) .c0166::before {
          background: transparent;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0163:not(.c0167).c0167 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0163:not(.c0167):not(.c0167):hover {
          fill: LinkText !important;
          color: LinkText !important;
          box-shadow: none !important;
        }
      }
      a.c0163:not(.c0167):not(.c0167):hover .c0166::before {
      }
      @media (-ms-high-contrast: active) {
        a.c0163:not(.c0167):not(.c0167):hover .c0166::before {
          background: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0163:hover:enabled,
        a.c0163:not(.c0167):hover {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0163:hover:enabled .c0171,
      .c0163:hover:enabled .c0172,
      a.c0163:not(.c0167):hover .c0171,
      a.c0163:not(.c0167):hover .c0172 {
        fill: #0066b4;
      }
      @media (-ms-high-contrast: active) {
        .c0163:hover:enabled .c0171,
        .c0163:hover:enabled .c0172,
        a.c0163:not(.c0167):hover .c0171,
        a.c0163:not(.c0167):hover .c0172 {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0163:hover .c0166::before {
          background: Highlight;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0163 .c0166::before {
          background: ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0163:focus-visible {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0163:focus-visible .c0166::before {
        background: #2b2b2b;
        height: 2px;
      }
      @media (-ms-high-contrast: active) {
        .c0163:focus-visible .c0166::before {
          background: Highlight;
        }
      }
      .c0164 {
        min-width: 74px;
        padding-left: 0;
        border-width: 0;
        padding-right: 0;
        justify-content: flex-start;
        background-color: transparent;
        color: #0078d4;
        fill: #0078d4;
      }
      .c0164:focus {
        outline: none;
      }
      .c0164:focus-visible {
        box-shadow: none;
        border-color: transparent;
      }
      .c0164 .c0166::before {
      }
      .c0164:hover .c0166::before {
        background: #0066b4;
      }
      .c0164:hover.c0167 .c0166::before {
        display: none;
      }
      .c0164:active .c0166::before {
        background: #1181d7;
      }
      .c0164.c0167,
      .c0164.c0167 .c0166::before {
        background-color: transparent;
      }
      .c0164:hover:enabled,
      a.c0164:not(.c0167):hover {
        background-color: transparent;
        color: #0066b4;
      }
      .c0164:active:enabled,
      a.c0164:not(.c0167):active {
        background-color: transparent;
        color: #1181d7;
        fill: #1181d7;
      }
      @media (-ms-high-contrast: active) {
        .c0164 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonFace;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0164:not(.c0167) {
      }
      a.c0164:not(.c0167):not(.c0167):hover {
      }
      a.c0164:not(.c0167).c0167 {
      }
      @media (-ms-high-contrast: active) {
        a.c0164:not(.c0167).c0167 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0164:not(.c0167):not(.c0167):hover {
          fill: LinkText !important;
          color: LinkText !important;
          box-shadow: none !important;
        }
      }
      a.c0164:not(.c0167):not(.c0167):hover .c0166::before {
      }
      @media (-ms-high-contrast: active) {
        a.c0164:not(.c0167):not(.c0167):hover .c0166::before {
          background: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0164:hover:enabled,
        a.c0164:not(.c0167):hover {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0164:hover:enabled .c0171,
      .c0164:hover:enabled .c0172,
      a.c0164:not(.c0167):hover .c0171,
      a.c0164:not(.c0167):hover .c0172 {
        fill: #0066b4;
      }
      @media (-ms-high-contrast: active) {
        .c0164:hover:enabled .c0171,
        .c0164:hover:enabled .c0172,
        a.c0164:not(.c0167):hover .c0171,
        a.c0164:not(.c0167):hover .c0172 {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0164:hover .c0166::before {
          background: Highlight;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0164 .c0166::before {
          background: ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0164:focus-visible {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0164:focus-visible .c0166::before {
        background: #2b2b2b;
        height: 2px;
      }
      @media (-ms-high-contrast: active) {
        .c0164:focus-visible .c0166::before {
          background: Highlight;
        }
      }
      .c0165 {
        background: #ffffff;
      }
      .c0165:hover:enabled,
      a.c0165:not(.c0167):hover {
        background-color: #f2f2f2;
      }
      .c0165:active:enabled,
      a.c0165:not(.c0167):active {
        background-color: #f7f7f7;
      }
      .c0165:focus {
        outline: none;
      }
      .c0165:focus-visible {
        border-color: #888888;
      }
      @media (-ms-high-contrast: active) {
        .c0165 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonFace;
          -ms-high-contrast-adjust: none;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0165:focus-visible {
          border-color: ButtonText;
          box-shadow: 0 0 0 1px inset ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0165:hover:enabled,
        a.c0165:not(.c0167):hover {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
        }
      }
      .c0166 {
        position: relative;
      }
      .c0166::before {
        width: 100%;
        bottom: -3px;
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        left: 0;
      }
      .c0166 svg {
      }
      .c0167 {
        cursor: not-allowed !important;
        opacity: 0.3;
      }
      @media (-ms-high-contrast: active) {
        .c0167 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      .c0167 .c0171,
      .c0167 .c0172 {
      }
      @media (-ms-high-contrast: active) {
        .c0167 .c0171,
        .c0167 .c0172 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
        }
      }
      .c0168 {
        display: flex;
        min-width: 20px;
        min-height: 20px;
        align-items: center;
        justify-content: center;
      }
      .c0169 {
      }
      .c0170 {
      }
      .c0171 {
      }
      .c0172 {
      }
      .c0173 {
      }
      .c0173 .c0169 {
        margin-right: 10px;
      }
      .c0173 .c0170 {
        margin-left: 10px;
      }
    </style>
    <style data-jss="" data-meta="MSFTButton">
      .c0146 {
        cursor: pointer;
        display: inline-flex;
        overflow: hidden;
        max-width: 374px;
        box-sizing: border-box;
        transition: all 0.1s ease-in-out;
        line-height: 1;
        font-family: inherit;
        align-items: center;
        white-space: nowrap;
        justify-content: center;
        text-decoration: none;
        font-size: 14px;
        min-width: 32px;
        padding: 0 8px;
        height: 32px;
        border: 2px solid transparent;
        border-radius: 2px;
        color: #2b2b2b;
        fill: #2b2b2b;
        background: #ededed;
      }
      .c0146:hover:enabled,
      a.c0146:not(.c0153):hover {
        background: #e5e5e5;
      }
      .c0146:active:enabled,
      a.c0146:not(.c0153):active {
        background: #f2f2f2;
      }
      .c0146:focus {
        outline: none;
      }
      .c0146:focus-visible {
        border-color: #888888;
      }
      .c0146:disabled {
      }
      .c0146::-moz-focus-inner {
        border: 0;
      }
      @media (-ms-high-contrast: active) {
        .c0146 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonText;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0146:not(.c0153) {
      }
      @media (-ms-high-contrast: active) {
        a.c0146:not(.c0153) {
          fill: LinkText !important;
          color: LinkText !important;
          background: Window;
          border-color: LinkText !important;
        }
      }
      a.c0146:not(.c0153):not(.c0153):hover {
      }
      a.c0146:not(.c0153).c0153 {
      }
      @media (-ms-high-contrast: active) {
        a.c0146:not(.c0153).c0153 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      a.c0146:not(.c0153).c0153:hover {
      }
      @media (-ms-high-contrast: active) {
        a.c0146:not(.c0153).c0153:hover {
          box-shadow: none !important;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0146:not(.c0153):not(.c0153):hover {
          background: ButtonFace;
          box-shadow: 0 0 0 1px inset LinkText !important;
        }
      }
      a.c0146:not(.c0153):not(.c0153):hover .c0157,
      a.c0146:not(.c0153):not(.c0153):hover .c0158 {
      }
      @media (-ms-high-contrast: active) {
        a.c0146:not(.c0153):not(.c0153):hover .c0157,
        a.c0146:not(.c0153):not(.c0153):hover .c0158 {
          fill: LinkText !important;
          color: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0146:disabled {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0146:focus-visible {
          border-color: ButtonText;
          box-shadow: 0 0 0 1px inset ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0146:hover:enabled,
        a.c0146:not(.c0153):hover {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
        }
      }
      .c0146:hover:enabled .c0157,
      .c0146:hover:enabled .c0158,
      a.c0146:not(.c0153):hover .c0157,
      a.c0146:not(.c0153):hover .c0158 {
      }
      @media (-ms-high-contrast: active) {
        .c0146:hover:enabled .c0157,
        .c0146:hover:enabled .c0158,
        a.c0146:not(.c0153):hover .c0157,
        a.c0146:not(.c0153):hover .c0158 {
          fill: HighlightText !important;
          color: HighlightText !important;
        }
      }
      .c0147 {
        color: #ffffff;
        fill: #ffffff;
        background: #0078d4;
      }
      .c0147:hover:enabled,
      a.c0147:not(.c0153):hover {
        background: #006cbe;
      }
      .c0147:active:enabled,
      a.c0147:not(.c0153):active {
        background: #1683d8;
      }
      .c0147:focus {
        outline: none;
      }
      .c0147:focus-visible {
        border-color: #888888;
        box-shadow: 0 0 0 2px inset #ffffff;
      }
      .c0147 .c0157,
      .c0147 .c0158 {
        fill: #ffffff;
      }
      @media (-ms-high-contrast: active) {
        .c0147 {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
          border-color: Highlight;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0147:not(.c0153) {
      }
      a.c0147:not(.c0153) .c0157,
      a.c0147:not(.c0153) .c0158 {
      }
      @media (-ms-high-contrast: active) {
        a.c0147:not(.c0153) .c0157,
        a.c0147:not(.c0153) .c0158 {
          fill: LinkText !important;
          color: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0147:focus-visible {
          border-color: ButtonText !important;
          box-shadow: 0 0 0 2px inset ButtonFace;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0147:hover:enabled,
        a.c0147:not(.c0153):hover {
          fill: Highlight;
          color: Highlight;
          background: HighlightText;
          border-color: Highlight;
        }
      }
      .c0148 {
        background: transparent;
        border: 1px solid #bebebe;
        padding: 0 9px;
      }
      .c0148:hover:enabled,
      a.c0148:not(.c0153):hover {
        background: transparent;
        border: 1px solid #979797;
      }
      .c0148:active:enabled,
      a.c0148:not(.c0153):active {
        background: transparent;
        border: 1px solid #d6d6d6;
      }
      .c0148:focus {
        outline: none;
      }
      .c0148:focus-visible {
        box-shadow: 0 0 0 1px #888888 inset;
        border-color: #888888;
      }
      @media (-ms-high-contrast: active) {
        .c0148 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonText;
          -ms-high-contrast-adjust: none;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0148:focus-visible {
          border-color: ButtonText;
          box-shadow: 0 0 0 1px inset ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0148:hover:enabled,
        a.c0148:not(.c0153):hover {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
        }
      }
      .c0149 {
        background-color: transparent;
        color: #0078d4;
        fill: #0078d4;
      }
      .c0149:focus {
        outline: none;
      }
      .c0149:focus-visible {
        box-shadow: none;
        border-color: transparent;
      }
      .c0149 .c0152::before {
      }
      .c0149:hover .c0152::before {
        background: #0066b4;
      }
      .c0149:hover.c0153 .c0152::before {
        display: none;
      }
      .c0149:active .c0152::before {
        background: #1181d7;
      }
      .c0149.c0153,
      .c0149.c0153 .c0152::before {
        background-color: transparent;
      }
      .c0149:hover:enabled,
      a.c0149:not(.c0153):hover {
        background-color: transparent;
        color: #0066b4;
      }
      .c0149:active:enabled,
      a.c0149:not(.c0153):active {
        background-color: transparent;
        color: #1181d7;
        fill: #1181d7;
      }
      @media (-ms-high-contrast: active) {
        .c0149 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonFace;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0149:not(.c0153) {
      }
      a.c0149:not(.c0153):not(.c0153):hover {
      }
      a.c0149:not(.c0153).c0153 {
      }
      a.c0149:not(.c0153) .c0152::before {
      }
      @media (-ms-high-contrast: active) {
        a.c0149:not(.c0153) .c0152::before {
          background: transparent;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0149:not(.c0153).c0153 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0149:not(.c0153):not(.c0153):hover {
          fill: LinkText !important;
          color: LinkText !important;
          box-shadow: none !important;
        }
      }
      a.c0149:not(.c0153):not(.c0153):hover .c0152::before {
      }
      @media (-ms-high-contrast: active) {
        a.c0149:not(.c0153):not(.c0153):hover .c0152::before {
          background: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0149:hover:enabled,
        a.c0149:not(.c0153):hover {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0149:hover:enabled .c0157,
      .c0149:hover:enabled .c0158,
      a.c0149:not(.c0153):hover .c0157,
      a.c0149:not(.c0153):hover .c0158 {
        fill: #0066b4;
      }
      @media (-ms-high-contrast: active) {
        .c0149:hover:enabled .c0157,
        .c0149:hover:enabled .c0158,
        a.c0149:not(.c0153):hover .c0157,
        a.c0149:not(.c0153):hover .c0158 {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0149:hover .c0152::before {
          background: Highlight;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0149 .c0152::before {
          background: ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0149:focus-visible {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0149:focus-visible .c0152::before {
        background: #2b2b2b;
        height: 2px;
      }
      @media (-ms-high-contrast: active) {
        .c0149:focus-visible .c0152::before {
          background: Highlight;
        }
      }
      .c0150 {
        min-width: 74px;
        padding-left: 0;
        border-width: 0;
        padding-right: 0;
        justify-content: flex-start;
        background-color: transparent;
        color: #0078d4;
        fill: #0078d4;
      }
      .c0150:focus {
        outline: none;
      }
      .c0150:focus-visible {
        box-shadow: none;
        border-color: transparent;
      }
      .c0150 .c0152::before {
      }
      .c0150:hover .c0152::before {
        background: #0066b4;
      }
      .c0150:hover.c0153 .c0152::before {
        display: none;
      }
      .c0150:active .c0152::before {
        background: #1181d7;
      }
      .c0150.c0153,
      .c0150.c0153 .c0152::before {
        background-color: transparent;
      }
      .c0150:hover:enabled,
      a.c0150:not(.c0153):hover {
        background-color: transparent;
        color: #0066b4;
      }
      .c0150:active:enabled,
      a.c0150:not(.c0153):active {
        background-color: transparent;
        color: #1181d7;
        fill: #1181d7;
      }
      @media (-ms-high-contrast: active) {
        .c0150 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonFace;
          -ms-high-contrast-adjust: none;
        }
      }
      a.c0150:not(.c0153) {
      }
      a.c0150:not(.c0153):not(.c0153):hover {
      }
      a.c0150:not(.c0153).c0153 {
      }
      @media (-ms-high-contrast: active) {
        a.c0150:not(.c0153).c0153 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        a.c0150:not(.c0153):not(.c0153):hover {
          fill: LinkText !important;
          color: LinkText !important;
          box-shadow: none !important;
        }
      }
      a.c0150:not(.c0153):not(.c0153):hover .c0152::before {
      }
      @media (-ms-high-contrast: active) {
        a.c0150:not(.c0153):not(.c0153):hover .c0152::before {
          background: LinkText !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0150:hover:enabled,
        a.c0150:not(.c0153):hover {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0150:hover:enabled .c0157,
      .c0150:hover:enabled .c0158,
      a.c0150:not(.c0153):hover .c0157,
      a.c0150:not(.c0153):hover .c0158 {
        fill: #0066b4;
      }
      @media (-ms-high-contrast: active) {
        .c0150:hover:enabled .c0157,
        .c0150:hover:enabled .c0158,
        a.c0150:not(.c0153):hover .c0157,
        a.c0150:not(.c0153):hover .c0158 {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0150:hover .c0152::before {
          background: Highlight;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0150 .c0152::before {
          background: ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0150:focus-visible {
          fill: Highlight !important;
          color: Highlight !important;
        }
      }
      .c0150:focus-visible .c0152::before {
        background: #2b2b2b;
        height: 2px;
      }
      @media (-ms-high-contrast: active) {
        .c0150:focus-visible .c0152::before {
          background: Highlight;
        }
      }
      .c0151 {
        background: #ffffff;
      }
      .c0151:hover:enabled,
      a.c0151:not(.c0153):hover {
        background-color: #f2f2f2;
      }
      .c0151:active:enabled,
      a.c0151:not(.c0153):active {
        background-color: #f7f7f7;
      }
      .c0151:focus {
        outline: none;
      }
      .c0151:focus-visible {
        border-color: #888888;
      }
      @media (-ms-high-contrast: active) {
        .c0151 {
          fill: ButtonText;
          color: ButtonText;
          background: ButtonFace;
          border-color: ButtonFace;
          -ms-high-contrast-adjust: none;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0151:focus-visible {
          border-color: ButtonText;
          box-shadow: 0 0 0 1px inset ButtonText;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0151:hover:enabled,
        a.c0151:not(.c0153):hover {
          fill: HighlightText;
          color: HighlightText;
          background: Highlight;
        }
      }
      .c0152 {
        position: relative;
      }
      .c0152::before {
        width: 100%;
        bottom: -3px;
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        left: 0;
      }
      .c0152 svg {
      }
      .c0153 {
        cursor: not-allowed !important;
        opacity: 0.3;
      }
      @media (-ms-high-contrast: active) {
        .c0153 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
          background: ButtonFace !important;
          border-color: GrayText !important;
        }
      }
      .c0153 .c0157,
      .c0153 .c0158 {
      }
      @media (-ms-high-contrast: active) {
        .c0153 .c0157,
        .c0153 .c0158 {
          fill: GrayText !important;
          color: GrayText !important;
          opacity: 1;
        }
      }
      .c0154 {
        display: flex;
        min-width: 20px;
        min-height: 20px;
        align-items: center;
        justify-content: center;
      }
      .c0155 {
      }
      .c0156 {
      }
      .c0157 {
      }
      .c0158 {
      }
      .c0159 {
      }
      .c0159 .c0155 {
        margin-right: 10px;
      }
      .c0159 .c0156 {
        margin-left: 10px;
      }
    </style>
    <style data-jss="" data-meta="BaseImage">
      .c0143 {
        margin: 0;
        height: auto;
        display: block;
        max-width: 100%;
      }
      .c0144 {
        display: block;
      }
      .c0145 {
        margin: 0;
        height: auto;
        display: block;
        max-width: 100%;
      }
    </style>
    <style data-jss="" data-meta="Wa">
      .c011 {
        position: static;
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c011 {
          position: relative;
        }
      }
      @media (max-width: 799px) {
        .c011 {
          position: relative;
        }
      }
      .c012 {
        top: calc(50% - 198px);
        left: calc(50% - 300px);
        width: 600px;
        height: 60vh;
        z-index: 0;
        position: relative;
        text-align: center;
      }
      @media (min-height: 1100px) {
        .c012 {
          top: calc(50% - 230px);
        }
      }
      @media (max-width: 611px) or (max-height: 520px) {
        .c012 {
          top: calc(50% - 145px);
        }
      }
      .c013 {
        top: calc(100% - 116px);
        left: calc(50% - 450px);
        display: inline-flex;
        z-index: 11;
        position: absolute;
      }
      @media (min-width: 1000px) and (max-width: 1100px) {
        .c013 {
          left: calc(50% - 400px);
        }
      }
      @media (min-width: 900px) and (max-width: 1000px) {
        .c013 {
          left: calc(50% - 385px);
        }
      }
      @media (min-width: 860px) and (max-width: 900px) {
        .c013 {
          left: calc(50% - 380px);
        }
      }
      @media (min-width: 759px) and (max-width: 860px) {
        .c013 {
          left: calc(50% - 298px);
        }
      }
      @media (min-width: 611px) and (max-width: 760px) {
        .c013 {
          left: calc(50% - 222px);
        }
      }
      @media (min-width: 463px) and (max-width: 612px) {
        .c013 {
          left: calc(50% - 146px);
        }
      }
      @media (max-width: 464px) {
        .c013 {
          left: calc(50% - 70px);
        }
      }
      .c014 {
        top: calc(100% - 84px);
        width: 32px;
        height: 32px;
        z-index: 11;
        position: absolute;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 24px;
        border-radius: 17px;
      }
      @media (min-width: 1000px) and (max-width: 1100px) {
        .c014 {
          left: calc(50% - 450px);
        }
      }
      @media (min-width: 900px) and (max-width: 1000px) {
        .c014 {
          left: calc(50% - 435px);
        }
      }
      @media (min-width: 860px) and (max-width: 900px) {
        .c014 {
          left: calc(50% - 423px);
        }
      }
      @media (min-width: 800px) and (max-width: 860px) {
        .c014 {
          left: calc(50% - 360px);
        }
      }
      @media (min-width: 759px) and (max-width: 800px) {
        .c014 {
          left: calc(50% - 354px);
        }
      }
      @media (min-width: 611px) and (max-width: 760px) {
        .c014 {
          left: calc(50% - 278px);
        }
      }
      @media (min-width: 463px) and (max-width: 612px) {
        .c014 {
          left: calc(50% - 202px);
        }
      }
      @media (max-width: 464px) {
        .c014 {
          left: calc(50% - 126px);
        }
      }
      @media (prefers-color-scheme: dark) {
        .c014 {
          background: #0c1b43;
          box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
        }
      }
      .c015 {
        top: calc(100% - 84px);
        width: 32px;
        height: 32px;
        z-index: 11;
        position: absolute;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin-left: 12px;
        border-radius: 17px;
      }
      @media (min-width: 1000px) and (max-width: 1100px) {
        .c015 {
          right: calc(50% - 400px);
        }
      }
      @media (min-width: 860px) and (max-width: 1000px) {
        .c015 {
          right: calc(50% - 415px);
        }
      }
      @media (min-width: 800px) and (max-width: 860px) {
        .c015 {
          right: calc(50% - 360px);
        }
      }
      @media (min-width: 759px) and (max-width: 800px) {
        .c015 {
          right: calc(50% - 354px);
        }
      }
      @media (min-width: 611px) and (max-width: 760px) {
        .c015 {
          right: calc(50% - 278px);
        }
      }
      @media (min-width: 463px) and (max-width: 612px) {
        .c015 {
          right: calc(50% - 202px);
        }
      }
      @media (max-width: 464px) {
        .c015 {
          right: calc(50% - 126px);
        }
      }
      @media (prefers-color-scheme: dark) {
        .c015 {
          background: #0c1b43;
          box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
        }
      }
      .c016 {
        width: 140px;
        color: #37607d;
        height: 96px;
        padding: 0px 16px 10px 16px;
        font-size: 12px;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        white-space: normal;
        font-family: Segoe UI;
        margin-right: 12px;
        border-radius: 8px;
        flex-direction: column;
        letter-spacing: -0.01em;
        justify-content: space-around;
      }
      .c016:hover {
        background: #ffffff !important;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12) !important;
      }
      @media (prefers-color-scheme: dark) {
        .c016 {
          color: #ffffff;
          border: 1px solid #2b4ba1;
          background: #0c1b43;
          box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
        }
        .c016:hover {
          background: #0c1b43 !important;
          box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.12) !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c016 {
          color: ButtonText;
          background: ButtonFace;
        }
        .c016:hover {
          color: #ffffff !important;
          background: #0c1b43 !important;
          box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.12) !important;
        }
      }
      .c017 {
        width: 140px;
        color: #37607d;
        height: 96px;
        padding: 0px 16px 10px 16px;
        font-size: 12px;
        background: #ffffff;
        box-shadow: 0 -5px 5px -5px rgb(0 0 0 / 13%),
          -5px 0 5px -5px rgb(0 0 0 / 13%), 5px 0 5px -5px rgb(0 0 0 / 13%);
        text-align: center;
        white-space: normal;
        font-family: Segoe UI;
        margin-right: 10px;
        border-radius: 8px 8px 0px 0px;
        flex-direction: column;
        letter-spacing: -0.01em;
        pointer-events: none;
        justify-content: space-around;
      }
      @media (prefers-color-scheme: dark) {
        .c017 {
          color: #ffffff;
          background: #0c1b43;
          box-shadow: 0 -5px 5px -5px rgb(255 255 255 / 20%),
            -5px 0 5px -5px rgb(255 255 255 / 20%),
            5px 0 5px -5px rgb(255 255 255 / 20%);
        }
      }
      @media (-ms-high-contrast: active) {
        .c017 {
          color: ButtonText;
          background: ButtonFace;
        }
      }
      .c018 {
        width: 300px;
        color: #1a237e;
        height: 30px;
        background: #ffffff;
        box-shadow: 2px 2px 5px #888888;
        transition: background-color 0.3s ease-in-out;
        border-radius: 4px;
      }
      .c018:hover {
        background: #f5f5f5 !important;
      }
      @media (prefers-color-scheme: dark) {
        .c018 {
          color: #ffffff;
          border: 1px solid #ffffff;
          background: #1a237e;
          box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
        }
        .c018:hover {
          background: #065ebd !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c018 {
          color: ButtonText;
          background: ButtonFace;
        }
        .c018:hover {
          color: #ffffff !important;
          background: #0c1b43 !important;
          box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.12) !important;
        }
      }
      .c019 {
        width: 140px;
        color: #37607d;
        height: 96px;
        padding: 0px 16px 10px 16px;
        font-size: 12px;
        background: rgba(255, 255, 255, 0.6);
        text-align: center;
        white-space: normal;
        font-family: Segoe UI;
        margin-right: 10px;
        border-radius: 8px 8px 0px 0px;
        flex-direction: column;
        letter-spacing: -0.01em;
        backdrop-filter: blur(4px);
        justify-content: space-around;
      }
      .c019:hover {
        background: rgba(255, 255, 255, 0.8) !important;
      }
      @media (prefers-color-scheme: dark) {
        .c019 {
          color: #ffffff;
          background: rgba(12, 27, 67, 0.6);
        }
        .c019:hover {
          background: rgba(12, 27, 67, 0.8) !important;
        }
      }
      @media (-ms-high-contrast: active) {
        .c019 {
          color: ButtonText;
          background: ButtonFace;
        }
      }
      .c0110 {
        top: calc(100% - 68px);
        width: 100%;
        height: 68px;
        z-index: 9;
        position: absolute;
        background: #ffffff;
        box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.13);
        border-radius: 8px 8px 0px 0px;
      }
      @media (prefers-color-scheme: dark) {
        .c0110 {
          background: #0c1b43;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0110 {
          background: Window;
        }
      }
      .c0111 {
        top: calc(100% - 20px);
        width: 100%;
        height: calc(100% - 108px);
        z-index: 9;
        position: absolute;
        overflow: hidden;
        background: #ffffff;
        box-shadow: 0px 1px 7px rgb(0 0 0 / 13%);
        border-radius: 8px 8px 0px 0px;
      }
      @media (prefers-color-scheme: dark) {
        .c0111 {
          box-shadow: 0px 1px 7px rgb(255 255 255 / 20%);
          background: #0c1b43;
        }
      }
      @media (max-height: 600px) and (min-width: 1151px) {
        .c0111 {
          height: 660px;
        }
      }
      @media (min-height: 1022px) and (max-width: 1150px) {
        .c0111 {
          height: calc(100% - 169px);
        }
      }
      @media (max-height: 1021px) and (max-width: 1150px) {
        .c0111 {
          height: 853px;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0111 {
          background: Window;
        }
      }
      .c0112 {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: -2;
        position: fixed;
        background: radial-gradient(
            51.46% 20767.69% at 19.33% 0%,
            rgba(95, 239, 239, 0.3) 5.81%,
            rgba(112, 255, 217, 0.3) 56.2%,
            rgba(188, 255, 246, 0.3) 100%
          ),
          #ffffff;
      }
      @media (prefers-color-scheme: dark) {
        .c0112 {
          background: linear-gradient(
              70.87deg,
              #233665 17%,
              #3152a7 53.58%,
              #256973 96.31%
            ),
            #ffffff;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0112 {
          background: Window;
        }
      }
      .c0113 {
        top: 12px;
        left: 20px;
        width: 162px;
        color: #737373;
        height: 32px;
        margin: 0px 12px 0px 12px;
        z-index: 1;
        position: fixed;
        font-size: 16px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.7);
        font-weight: 600;
        border-radius: 18px;
        padding-bottom: 2px;
        backdrop-filter: blur(20px);
      }
      @media (prefers-color-scheme: dark) {
        .c0113 {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(12, 27, 67, 0.7);
          backdrop-filter: blur(10px);
        }
      }
      @media (-ms-high-contrast: active) {
        .c0113 {
          color: ButtonText;
          background: Window;
        }
      }
      .c0114 {
        padding: 5px 6px 0px 0px;
      }
      .c0115 {
        top: 40%;
        left: -5%;
        position: absolute;
      }
      @media (min-width: 1920px) or (min-height: 1080px) {
        .c0115 {
          top: 40%;
          left: -5%;
          width: 609px;
          height: 609px;
          position: absolute;
        }
      }
      @media (max-width: 1920px) {
        .c0115 {
          top: 40%;
          left: -5%;
          width: 374px;
          height: 374px;
          position: absolute;
        }
      }
      @media (max-height: 401px) {
        .c0115 {
          top: 40%;
          left: -23%;
          width: 374px;
          height: 374px;
          position: absolute;
        }
      }
      @media (max-width: 801px) and (min-height: 768px) {
        .c0115 {
          top: 30%;
          left: -310px;
          width: 374px;
          height: 374px;
          position: fixed;
        }
      }
      @media (max-width: 760px) and (max-height: 768px) {
        .c0115 {
          top: 30%;
          left: -325px;
          width: 374px;
          height: 374px;
          position: fixed;
        }
      }
      .c0116 {
      }
      @media (min-width: 1920px) or (min-height: 1080px) {
        .c0116 {
          top: 5%;
          left: 60%;
          width: 209px;
          height: 209px;
          position: absolute;
        }
      }
      @media (max-width: 1920px) {
        .c0116 {
          left: 65%;
          width: 128px;
          bottom: 75%;
          height: 128px;
          position: absolute;
        }
      }
      @media (max-height: 401px) {
        .c0116 {
          left: 65%;
          width: 128px;
          bottom: 70%;
          height: 128px;
          position: absolute;
        }
      }
      @media (max-width: 801px) and (min-height: 768px) {
        .c0116 {
          left: 65%;
          width: 128px;
          bottom: 70%;
          height: 128px;
          position: fixed;
        }
      }
      @media (max-width: 760px) and (max-height: 768px) {
        .c0116 {
          left: 65%;
          width: 128px;
          bottom: 70%;
          height: 128px;
          position: fixed;
        }
      }
      .c0117 {
      }
      @media (min-width: 1920px) or (min-height: 1080px) {
        .c0117 {
          top: -120px;
          left: 20%;
          width: 340px;
          height: 340px;
          position: absolute;
        }
      }
      @media (max-width: 1920px) {
        .c0117 {
          top: -100px;
          left: 20%;
          width: 209px;
          height: 209px;
          position: absolute;
        }
      }
      @media (max-height: 401px) {
        .c0117 {
          top: -100px;
          left: 20%;
          width: 209px;
          height: 209px;
          position: absolute;
        }
      }
      @media (max-width: 801px) and (min-height: 768px) {
        .c0117 {
          top: -50px;
          left: 10%;
          width: 209px;
          height: 209px;
          position: fixed;
        }
      }
      @media (max-width: 760px) and (max-height: 768px) {
        .c0117 {
          top: -50px;
          left: 10%;
          width: 209px;
          height: 209px;
          position: fixed;
        }
      }
      .c0118 {
        top: -200px;
        left: 20%;
        position: fixed;
      }
      .c0119 {
      }
      @media (min-width: 1920px) or (min-height: 1080px) {
        .c0119 {
          top: 40%;
          left: 70%;
          width: 799px;
          height: 799px;
          position: absolute;
        }
      }
      @media (max-width: 1920px) {
        .c0119 {
          top: 40%;
          left: 75%;
          width: 491px;
          height: 491px;
          position: absolute;
        }
      }
      @media (max-height: 401px) {
        .c0119 {
          top: 100%;
          left: 75%;
          width: 491px;
          height: 491px;
          position: absolute;
        }
      }
      @media (max-width: 801px) and (min-height: 768px) {
        .c0119 {
          top: 40%;
          left: 85%;
          width: 491px;
          height: 491px;
          position: fixed;
        }
      }
      @media (max-width: 760px) and (max-height: 768px) {
        .c0119 {
          top: 40%;
          left: 87%;
          width: 491px;
          height: 491px;
          position: fixed;
        }
      }
      .c0120 {
        font-size: 20px;
        font-style: normal;
        background: linear-gradient(
            108.97deg,
            rgba(31, 101, 241, 0.4) 37.21%,
            rgba(0, 0, 0, 0) 82.32%
          ),
          #11283d;
        font-family: Segoe UI;
        font-weight: 700;
        line-height: 24px;
        letter-spacin: -0.03em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @media (prefers-color-scheme: dark) {
        .c0120 {
          background: linear-gradient(
              108.97deg,
              rgba(176, 194, 230, 0.4) 37.21%,
              rgba(255, 255, 255, 0) 82.32%
            ),
            #ffffff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0120 {
          background: WindowText;
        }
      }
      .c0121 {
        font-size: 20px;
        font-style: normal;
        background: linear-gradient(
            108.97deg,
            rgba(31, 101, 241, 0.4) 37.21%,
            rgba(0, 0, 0, 0) 82.32%
          ),
          #11283d;
        font-family: Segoe UI;
        font-weight: 400;
        line-height: 24px;
        letter-spacin: -0.03em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @media (prefers-color-scheme: dark) {
        .c0121 {
          background: linear-gradient(
              108.97deg,
              rgba(176, 194, 230, 0.4) 37.21%,
              rgba(255, 255, 255, 0) 82.32%
            ),
            #ffffff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0121 {
          background: WindowText;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .c0122 {
        left: calc(50% - 246px);
        width: 500px;
        bottom: 20px;
        position: absolute;
        text-align: center;
      }
      @media (max-width: 690px) and (max-height: 316px) {
        .c0122 {
          left: calc(50% - 250px);
          bottom: 0px;
        }
      }
      @media (max-width: 800px) {
        .c0122 {
          left: calc(50% - 250px);
        }
      }
      @media (max-width: 612px) {
        .c0122 {
          left: calc(50% - 250px);
          bottom: 50px;
        }
      }
      .c0123 {
        color: #37607d;
        font-size: 14px;
        font-style: normal;
        text-align: center;
        font-family: Segoe UI;
        font-weight: 400;
        line-height: 98.01%;
        letter-spacing: -0.01em;
        padding-bottom: 6px;
      }
      @media (prefers-color-scheme: dark) {
        .c0123 {
          color: #ffffff;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0123 {
          color: WindowText;
        }
      }
      .c0124 {
      }
      @media (-ms-high-contrast: active) {
        .c0124 {
          fill: WindowText;
        }
      }
      .c0125 {
        height: 144px;
        z-index: -1;
        position: relative;
        font-size: 72px;
        background: -webkit-linear-gradient(
            108.97deg,
            rgba(31, 101, 241, 0.4) 37.21%,
            rgba(0, 0, 0, 0) 82.32%
          ),
          linear-gradient(0deg, #11283d, #11283d);
        font-family: Segoe UI;
        line-height: 72px;
        letter-spacing: -0.03em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }
      @media (prefers-color-scheme: dark) {
        .c0125 {
          background: linear-gradient(
              108.97deg,
              rgba(131, 172, 255, 0.4) 37.21%,
              rgba(255, 255, 255, 0) 82.32%
            ),
            #ffffff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0125 {
          background: WindowText;
          background-color: transparent;
        }
      }
      @media (max-width: 611px) or (max-height: 520px) {
        .c0125 {
          width: 300px;
          margin: auto;
          height: 85px;
          font-size: 36px;
          line-height: 36px;
        }
      }
      .c0126 {
        color: #11283d;
        height: 53px;
        z-index: -1;
        position: relative;
        font-size: 25px;
        font-family: Segoe UI;
        line-height: 53px;
        letter-spacing: -0.02em;
        font-weight: 400;
      }
      @media (prefers-color-scheme: dark) {
        .c0126 {
          color: #ffffff;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0126 {
          color: WindowText;
        }
      }
      @media (max-width: 611px) or (max-height: 520px) {
        .c0126 {
          width: 400px;
          height: 20px;
          margin: auto;
          font-size: 16px;
          line-height: normal;
        }
      }
      .c0127 {
        height: 32px;
        z-index: -1;
        display: -webkit-inline-box;
        position: relative;
        font-size: 32px;
        font-family: Segoe UI;
        line-height: 100%;
        letter-spacing: -0.02em;
        font-weight: 700;
      }
      @media (max-width: 611px) or (max-height: 520px) {
        .c0127 {
          line-height: 24px;
        }
      }
      .c0128 {
        width: 31px;
        height: 31px;
      }
      @media (max-width: 611px) or (max-height: 520px) {
        .c0128 {
          width: 21px;
          height: 21px;
        }
      }
      .c0129 {
        color: #ff0000;
        text-shadow: 0px 1px 22px #ffffff;
        margin-right: 4px;
      }
      @media (prefers-color-scheme: dark) {
        .c0129 {
          color: #77f3f3;
          text-shadow: 0px 1px 22px #09235f;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0129 {
          color: WindowText;
        }
      }
      @media (max-width: 611px) or (max-height: 520px) {
        .c0129 {
          font-size: 22px;
        }
      }
      .c0130 {
        top: calc(50% - 55vw * 9 / 32);
        left: calc(15% - 133px);
        float: left;
        width: 55%;
        height: calc(55vw * 9 / 16);
        filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.14));
        position: absolute;
        border-radius: 4px;
      }
      @media (min-width: 1151px) and (max-height: 600px) {
        .c0130 {
          width: 45%;
          height: calc(45vw * 9 / 16);
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0130 {
          top: unset;
          left: unset;
          width: 612px;
          height: 345px;
          position: unset;
          padding-top: 30px;
        }
      }
      @media (max-width: 799px) {
        .c0130 {
          top: unset;
          left: unset;
          width: 80%;
          height: calc(0.8 * 100vw * 9 / 16);
          position: unset;
          padding-top: 30px;
        }
      }
      .c0131 {
        color: white;
        padding: 72px 92px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: black;
      }
      @media (min-width: 1151px) and (max-height: 600px) {
        .c0131 {
          height: fit-content;
          padding: 36px 45px 36px 45px;
          margin-top: 30px;
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0131 {
          padding: 36px 45px 36px 45px;
          margin-top: 30px;
        }
      }
      @media (max-width: 799px) {
        .c0131 {
          padding: 36px 45px 36px 45px;
          font-size: 12px;
          margin-top: 30px;
        }
      }
      @media (max-width: 640px) {
        .c0131 {
          height: fit-content;
          padding: 18px 30px 15px 10px;
          font-size: 12px;
          margin-top: 30px;
        }
      }
      .c0132 {
        top: calc(70%);
        left: calc(15% - 133px - 27px);
        width: 27px;
        height: 32px;
        border: none;
        z-index: 0;
        padding: 9px 7px;
        opacity: 0.5;
        position: absolute;
        box-sizing: border-box;
        border-radius: 4px 0px 0px 4px;
        background-color: #036ac4;
      }
      .c0132:hover {
        opacity: 1;
      }
      @media (min-width: 1151px) and (max-height: 600px) {
        .c0132 {
          top: 400px;
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0132 {
          top: 80%;
          left: -3.1%;
          width: 35px;
        }
      }
      @media (max-width: 799px) {
        .c0132 {
          top: 80%;
          left: -4%;
          width: 32px;
        }
      }
      @media (max-width: 600px) {
        .c0132 {
          top: 80%;
          left: -5%;
          width: 32px;
        }
      }
      @media (max-width: 500px) {
        .c0132 {
          top: 80%;
          left: -6%;
          width: 32px;
        }
      }
      .c0133 {
        float: left;
        bottom: 0%;
        position: absolute;
      }
      @media (max-height: 750px) {
        .c0133 {
          bottom: unset;
        }
      }
      .c0134 {
        top: 25%;
        left: calc(85% - 267px);
        float: right;
        right: unset;
        display: block;
        position: absolute;
      }
      @media (max-width: 1360px) and (min-width: 1152px) {
        .c0134 {
          top: 17%;
        }
      }
      @media (max-height: 600px) and (min-width: 1151px) {
        .c0134 {
          top: 48px;
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0134 {
          top: 36px;
          left: 0px;
          width: 100%;
          right: unset;
          display: flex;
          padding-left: calc(50% - 306px);
          padding-right: calc(50% - 306px);
          flex-direction: column;
        }
      }
      @media (max-width: 799px) {
        .c0134 {
          top: 36px;
          left: 0px;
          width: 100%;
          right: unset;
          display: flex;
          padding-left: 10%;
          padding-right: 10%;
          flex-direction: column;
        }
      }
      .c0135 {
        width: 346px;
        color: #11283d;
        font-size: 20px;
        font-family: Segoe UI;
        line-height: 28px;
        padding-bottom: 12px;
      }
      @media (prefers-color-scheme: dark) {
        .c0135 {
          color: #ffffff;
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0135 {
          width: 550px;
        }
      }
      @media (max-width: 799px) {
        .c0135 {
          width: 70%;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0135 {
          color: WindowText;
        }
      }
      .c0136 {
        width: 400px;
        font-size: 48px;
        background: -webkit-linear-gradient(
            108.97deg,
            rgba(31, 101, 241, 0.4) 37.21%,
            rgba(0, 0, 0, 0) 82.32%
          ),
          linear-gradient(0deg, #11283d, #11283d);
        font-family: Segoe UI;
        line-height: 56px;
        font-weight: 700;
        padding-bottom: 3px;
        letter-spacing: -0.03em;
        margin-block-end: 0px;
        margin-block-start: 0px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @media (prefers-color-scheme: dark) {
        .c0136 {
          background: linear-gradient(
              108.97deg,
              rgba(176, 194, 230, 0.4) 37.21%,
              rgba(255, 255, 255, 0) 82.32%
            ),
            #ffffff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0136 {
          background: WindowText;
          background-color: transparent;
        }
      }
      .c0137 {
        width: 400px;
        color: #11283d;
        font-size: 16px;
        padding-top: 10px;
        font-family: Segoe UI;
        line-height: 22px;
      }
      @media (prefers-color-scheme: dark) {
        .c0137 {
          color: #ffffff;
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0137 {
          width: 612px;
        }
      }
      @media (max-width: 799px) {
        .c0137 {
          width: 80%;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0137 {
          color: WindowText;
        }
      }
      .c0138 {
        margin: 24px 0px 24px 0px;
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0138 {
          width: 612px;
          margin: 24px 0px 24px 0px;
        }
      }
      @media (max-width: 799px) {
        .c0138 {
          width: 80%;
          margin: 24px 0px 24px 0px;
        }
      }
      .c0139 {
        width: 400px;
        color: rgba(17, 40, 61, 0.8);
        height: 25px;
        display: -webkit-inline-box;
        font-size: 14px;
        font-family: Segoe UI;
        line-height: 16px;
      }
      @media (prefers-color-scheme: dark) {
        .c0139 {
          color: rgba(255, 255, 255, 0.8);
        }
      }
      @media (max-width: 1150px) and (min-width: 800px) {
        .c0139 {
          width: 612px;
        }
      }
      @media (max-width: 799px) {
        .c0139 {
          width: 80%;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0139 {
          color: WindowText;
        }
      }
      .c0140 {
        width: calc(100% - 40px);
        padding-top: 1px;
      }
      .c0141 {
        fill: rgba(17, 40, 61, 0.8);
      }
      @media (prefers-color-scheme: dark) {
        .c0141 {
          fill: #ffffff;
        }
      }
      @media (-ms-high-contrast: active) {
        .c0141 {
          fill: WindowText;
        }
      }
      .c0142 {
        font-size: 12px;
        font-weight: normal;
        margin-block-end: 0px;
        margin-block-start: 0px;
      }
    </style>
  </head>
  <body style="margin: 0">
    <div id="app-root">
      <div>
        <div class="c0112" style="background-color: rgb(255, 255, 255)">
          <img
            id="bgimage"
            aria-hidden="true"
            class="c0143 c0116"
            alt=""
            src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Objects/Light%20Bulb.png"
          /><img
            id="bgimage"
            aria-hidden="true"
            class="c0143 c0115"
            alt=""
            src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Objects/Test%20Tube.png"
          /><img
            id="bgimage"
            aria-hidden="true"
            class="c0143 c0117"
            alt=""
            src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Objects/Blue%20Book.png"
          /><img
            id="bgimage"
            aria-hidden="true"
            class="c0143 c0119"
            alt=""
            src="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Objects/Pencil.png"
          /><button id="titleContainer" class="c0146 c0159 c0113">
            <div
              class="c0154 c0155"
              style="
                min-width: 24px;
                min-height: 24px;
                padding-top: 2px;
                margin-right: 8px;
              "
            >
              <svg
                class="c0157"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 0H9.33333V9.33333H0V0Z" fill="#F25022"></path>
                <path
                  d="M10.6667 0H20.0001V9.33333H10.6667V0Z"
                  fill="#7FBA00"
                ></path>
                <path
                  d="M0 10.667H9.33333V20.0003H0V10.667Z"
                  fill="#00A4EF"
                ></path>
                <path
                  d="M10.6667 10.667H20.0001V20.0003H10.6667V10.667Z"
                  fill="#FFB900"
                ></path>
              </svg>
            </div>
            <span class="c0152">Esmerelda</span>
          </button>
          <div class="c012">
            <div class="c0127">
              <div class="c0129">Hello there!</div>
              <div class="c0128">
                <svg
                  viewBox="0 0 31 31"
                  fill="none"
                  class=""
                  aria-hidden="true"
                >
                  <g filter="url(#filter0_d_366_48286)">
                    <rect
                      x="-1"
                      y="-1"
                      width="33"
                      height="33"
                      fill="url(#pattern0)"
                      shape-rendering="crispEdges"
                    ></rect>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_366_48286"
                      x="0"
                      y="0"
                      width="41"
                      height="41"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dy="1"></feoffset>
                      <fegaussianblur stdDeviation="2"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                      ></fecolormatrix>
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_366_48286"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_366_48286"
                        result="shape"
                      ></feblend>
                    </filter>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_366_48286"
                        transform="scale(0.00416667)"
                      ></use>
                    </pattern>
                    <image
                      id="image0_366_48286"
                      width="240"
                      height="240"
                      xlink:href="https://cloud.esmerelda.tech/UI/Fluent/Emoji/Animated/Hand%20gestures/Waving%20Hand.png"
                    ></image>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="c0126">
              Welcome to Esmerelda Cloud! We have tools to help you
            </div>
            <div class="c0125">enhance your business!</div>
            <div id="clickHereContainer" class="c0122">
              <div class="c0123">Select any of our solutions to learn more</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                aria-hidden="true"
                style="background: rgba(233, 246, 255, 0)"
              >
                <style>
                  @keyframes chevron_o {
                    0% {
                      opacity: 1;
                    }
                    30% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 0;
                    }
                  }
                  @keyframes chevron-motion_t {
                    0% {
                      transform: translate(12px, 4.41px)
                        translate(-7px, -3.94px);
                      animation-timing-function: cubic-bezier(
                        0.25,
                        0.25,
                        0.25,
                        1
                      );
                    }
                    100% {
                      transform: translate(12px, 17.04px)
                        translate(-7px, -3.94px);
                    }
                  }
                  @keyframes chevron-motion_o {
                    0% {
                      opacity: 0;
                    }
                    30% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 1;
                    }
                  }
                </style>
                <path
                  id="chevron"
                  d="M7.7 7.32c-0.39 .38-1.01 .38-1.4 0l-5.33-5.2c-0.46-0.44-0.39-1.2 .15-1.55l.2-0.13c.4-0.26 .92-0.2 1.25 .13l3.72 3.72c.39 .39 1.03 .39 1.42 0l3.72-3.72c.33-0.33 .85-0.39 1.25-0.13l.2 .13c.54 .35 .61 1.11 .15 1.55l-5.33 5.2Z"
                  fill="#FFFFFF"
                  transform="translate(5,13.1)"
                  style="
                    animation: 1.5s linear 0s infinite normal both running
                      chevron_o;
                  "
                ></path>
                <path
                  id="chevron-motion"
                  d="M7.7 7.32c-0.39 .38-1.01 .38-1.4 0l-5.33-5.2c-0.46-0.44-0.39-1.2 .15-1.55l.2-0.13c.4-0.26 .92-0.2 1.25 .13l3.72 3.72c.39 .39 1.03 .39 1.42 0l3.72-3.72c.33-0.33 .85-0.39 1.25-0.13l.2 .13c.54 .35 .61 1.11 .15 1.55l-5.33 5.2Z"
                  fill="#FFFFFF"
                  opacity="0"
                  transform="translate(12,4.41) scale(.6,.6) translate(-7,-3.94)"
                  style="
                    animation: 1.5s linear 0s infinite normal both running
                        chevron-motion_t,
                      1.5s linear 0s infinite normal both running
                        chevron-motion_o;
                  "
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div id="Tile Container">
          <div
            role="tablist"
            id="tablist"
            aria-label="Education Feature Tabs"
            class="c013"
          >
            <button
              role="tab"
              class="c0160 c0173 c016"
              aria-selected="false"
              id="0"
              aria-controls="panel0"
              title="Microsoft 365"
              tabindex="-1"
            >
              <div class="c0168 c0169" style="margin-right: -3px">
                <svg
                  class="c0171"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20.0842 3.02539L19.8595 3.1613C19.5021 3.3775 19.1654 3.61923 18.8512 3.88336L19.4993 3.42749H25L26 10.9995L21 15.9995L16 19.4749V23.4824C16 26.2814 17.4629 28.8769 19.8574 30.3263L25.1211 33.5124L14 39.9997H11.8551L7.85737 37.5799C5.46286 36.1305 4 33.535 4 30.736V17.2601C4 14.4602 5.46379 11.864 7.85952 10.4149L19.8595 3.15638C19.9339 3.11141 20.0088 3.06774 20.0842 3.02539Z"
                    fill="url(#paint0_radial_1076_382175)"
                  ></path>
                  <path
                    d="M20.0842 3.02539L19.8595 3.1613C19.5021 3.3775 19.1654 3.61923 18.8512 3.88336L19.4993 3.42749H25L26 10.9995L21 15.9995L16 19.4749V23.4824C16 26.2814 17.4629 28.8769 19.8574 30.3263L25.1211 33.5124L14 39.9997H11.8551L7.85737 37.5799C5.46286 36.1305 4 33.535 4 30.736V17.2601C4 14.4602 5.46379 11.864 7.85952 10.4149L19.8595 3.15638C19.9339 3.11141 20.0088 3.06774 20.0842 3.02539Z"
                    fill="url(#paint1_linear_1076_382175)"
                  ></path>
                  <path
                    d="M32.0002 19V23.4803C32.0002 26.2793 30.5373 28.8748 28.1428 30.3242L16.1428 37.5878C13.6881 39.0737 10.6338 39.1273 8.13574 37.7487L19.8575 44.844C22.4042 46.3855 25.5961 46.3855 28.1428 44.844L40.1428 37.5803C42.5373 36.1309 44.0002 33.5354 44.0002 30.7364V27.5L43.0002 26L32.0002 19Z"
                    fill="url(#paint2_radial_1076_382175)"
                  ></path>
                  <path
                    d="M32.0002 19V23.4803C32.0002 26.2793 30.5373 28.8748 28.1428 30.3242L16.1428 37.5878C13.6881 39.0737 10.6338 39.1273 8.13574 37.7487L19.8575 44.844C22.4042 46.3855 25.5961 46.3855 28.1428 44.844L40.1428 37.5803C42.5373 36.1309 44.0002 33.5354 44.0002 30.7364V27.5L43.0002 26L32.0002 19Z"
                    fill="url(#paint3_linear_1076_382175)"
                  ></path>
                  <path
                    d="M40.1405 10.4153L28.1405 3.15678C25.6738 1.66471 22.6021 1.61849 20.0979 3.01811L19.8595 3.16231C17.4638 4.61143 16 7.20757 16 10.0075V19.4914L19.8595 17.1568C22.4051 15.6171 25.5949 15.6171 28.1405 17.1568L40.1405 24.4153C42.4613 25.8192 43.9076 28.2994 43.9957 30.9985C43.9986 30.9113 44 30.824 44 30.7364V17.2605C44 14.4606 42.5362 11.8644 40.1405 10.4153Z"
                    fill="url(#paint4_radial_1076_382175)"
                  ></path>
                  <path
                    d="M40.1405 10.4153L28.1405 3.15678C25.6738 1.66471 22.6021 1.61849 20.0979 3.01811L19.8595 3.16231C17.4638 4.61143 16 7.20757 16 10.0075V19.4914L19.8595 17.1568C22.4051 15.6171 25.5949 15.6171 28.1405 17.1568L40.1405 24.4153C42.4613 25.8192 43.9076 28.2994 43.9957 30.9985C43.9986 30.9113 44 30.824 44 30.7364V17.2605C44 14.4606 42.5362 11.8644 40.1405 10.4153Z"
                    fill="url(#paint5_linear_1076_382175)"
                  ></path>
                  <path
                    d="M4.00428 30.9984C4.00428 30.9984 4.00428 30.9984 4.00428 30.9984Z"
                    fill="url(#paint6_radial_1076_382175)"
                  ></path>
                  <path
                    d="M4.00428 30.9984C4.00428 30.9984 4.00428 30.9984 4.00428 30.9984Z"
                    fill="url(#paint7_linear_1076_382175)"
                  ></path>
                  <defs>
                    <radialgradient
                      id="paint0_radial_1076_382175"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(17.4186 10.6379) rotate(110.528) scale(33.3657 58.1966)"
                    >
                      <stop offset="0.06441" stop-color="#AE7FE2"></stop>
                      <stop offset="1" stop-color="#0078D4"></stop>
                    </radialgradient>
                    <lineargradient
                      id="paint1_linear_1076_382175"
                      x1="17.5119"
                      y1="37.868"
                      x2="12.7513"
                      y2="29.6342"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#114A8B"></stop>
                      <stop
                        offset="1"
                        stop-color="#0078D4"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <radialgradient
                      id="paint2_radial_1076_382175"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.4301 36.3511) rotate(-8.36717) scale(31.0503 20.5108)"
                    >
                      <stop offset="0.133928" stop-color="#D59DFF"></stop>
                      <stop offset="1" stop-color="#5E438F"></stop>
                    </radialgradient>
                    <lineargradient
                      id="paint3_linear_1076_382175"
                      x1="40.3569"
                      y1="25.3768"
                      x2="35.2554"
                      y2="32.6916"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#493474"></stop>
                      <stop
                        offset="1"
                        stop-color="#8C66BA"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <radialgradient
                      id="paint4_radial_1076_382175"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(41.0552 26.504) rotate(-165.772) scale(24.9228 41.9552)"
                    >
                      <stop offset="0.0584996" stop-color="#50E6FF"></stop>
                      <stop offset="1" stop-color="#436DCD"></stop>
                    </radialgradient>
                    <lineargradient
                      id="paint5_linear_1076_382175"
                      x1="16.9758"
                      y1="3.05655"
                      x2="24.4868"
                      y2="3.05655"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2D3F80"></stop>
                      <stop
                        offset="1"
                        stop-color="#436DCD"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <radialgradient
                      id="paint6_radial_1076_382175"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(41.0552 26.504) rotate(-165.772) scale(24.9228 41.9552)"
                    >
                      <stop offset="0.0584996" stop-color="#50E6FF"></stop>
                      <stop offset="1" stop-color="#436DCD"></stop>
                    </radialgradient>
                    <lineargradient
                      id="paint7_linear_1076_382175"
                      x1="16.9758"
                      y1="3.05655"
                      x2="24.4868"
                      y2="3.05655"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2D3F80"></stop>
                      <stop
                        offset="1"
                        stop-color="#436DCD"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                  </defs>
                </svg>
              </div>
              <span class="c0166"
                ><h5 class="c0142">Microsoft 365</h5></span
              ></button
            ><button
              role="tab"
              class="c0160 c0173 c016"
              aria-selected="false"
              id="1"
              aria-controls="panel1"
              title="Maths Solver"
              tabindex="-1"
            >
              <div class="c0168 c0169" style="margin-right: 0px">
                <svg
                  width="51"
                  height="48"
                  viewBox="0 0 51 48"
                  class="c0171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g filter="url(#filter0_b_542_62612)">
                    <path
                      d="M13.7777 41.7778C11.5686 41.7778 9.77773 39.987 9.77773 37.7778L9.77772 24L9.77772 10.2223C9.77772 8.01313 11.5686 6.22227 13.7777 6.22227L34.2222 6.22227C36.4313 6.22227 38.2222 8.01312 38.2222 10.2223L38.2222 37.7778C38.2222 39.987 36.4313 41.7778 34.2222 41.7778L13.7777 41.7778Z"
                      fill="#0089B5"
                      fill-opacity="0.55"
                    ></path>
                    <path
                      d="M13.7777 41.7778C11.5686 41.7778 9.77773 39.987 9.77773 37.7778L9.77772 24L9.77772 10.2223C9.77772 8.01313 11.5686 6.22227 13.7777 6.22227L34.2222 6.22227C36.4313 6.22227 38.2222 8.01312 38.2222 10.2223L38.2222 37.7778C38.2222 39.987 36.4313 41.7778 34.2222 41.7778L13.7777 41.7778Z"
                      fill="url(#paint0_linear_542_62612)"
                      fill-opacity="0.6"
                    ></path>
                  </g>
                  <g filter="url(#filter1_d_542_62612)">
                    <path
                      d="M16.4444 34.6665C14.2353 34.6665 12.4444 32.8756 12.4444 30.6665L12.4444 23.5554L12.4444 16.4443C12.4444 14.2351 14.2353 12.4443 16.4444 12.4443L36.8889 12.4443C39.098 12.4443 40.8889 14.2351 40.8889 16.4443L40.8889 30.6665C40.8889 32.8756 39.098 34.6665 36.8889 34.6665L16.4444 34.6665Z"
                      fill="#0089B5"
                    ></path>
                    <path
                      d="M16.4444 34.6665C14.2353 34.6665 12.4444 32.8756 12.4444 30.6665L12.4444 23.5554L12.4444 16.4443C12.4444 14.2351 14.2353 12.4443 16.4444 12.4443L36.8889 12.4443C39.098 12.4443 40.8889 14.2351 40.8889 16.4443L40.8889 30.6665C40.8889 32.8756 39.098 34.6665 36.8889 34.6665L16.4444 34.6665Z"
                      fill="#0089B5"
                    ></path>
                    <path
                      d="M16.4444 34.6665C14.2353 34.6665 12.4444 32.8756 12.4444 30.6665L12.4444 23.5554L12.4444 16.4443C12.4444 14.2351 14.2353 12.4443 16.4444 12.4443L36.8889 12.4443C39.098 12.4443 40.8889 14.2351 40.8889 16.4443L40.8889 30.6665C40.8889 32.8756 39.098 34.6665 36.8889 34.6665L16.4444 34.6665Z"
                      fill="#18A7F8"
                    ></path>
                  </g>
                  <g filter="url(#filter2_b_542_62612)">
                    <path
                      d="M8.44445 36.4443C6.23531 36.4443 4.44444 34.6535 4.44444 32.4443L4.44444 15.5554C4.44444 13.3463 6.2353 11.5554 8.44444 11.5554L39.5556 11.5554C41.7647 11.5554 43.5556 13.3463 43.5556 15.5554L43.5556 32.4443C43.5556 34.6535 41.7647 36.4443 39.5556 36.4443L8.44445 36.4443Z"
                      fill="url(#paint1_linear_542_62612)"
                      fill-opacity="0.5"
                    ></path>
                    <path
                      d="M8.44445 36.4443C6.23531 36.4443 4.44444 34.6535 4.44444 32.4443L4.44444 15.5554C4.44444 13.3463 6.2353 11.5554 8.44444 11.5554L39.5556 11.5554C41.7647 11.5554 43.5556 13.3463 43.5556 15.5554L43.5556 32.4443C43.5556 34.6535 41.7647 36.4443 39.5556 36.4443L8.44445 36.4443Z"
                      fill="url(#paint2_linear_542_62612)"
                    ></path>
                    <path
                      d="M8.44445 36.2235C6.35728 36.2235 4.66529 34.5315 4.66529 32.4443L4.66529 15.5554C4.66529 13.4683 6.35727 11.7763 8.44444 11.7763L39.5556 11.7763C41.6427 11.7763 43.3347 13.4683 43.3347 15.5554L43.3347 32.4443C43.3347 34.5315 41.6427 36.2235 39.5556 36.2235L8.44445 36.2235Z"
                      stroke="url(#paint3_linear_542_62612)"
                      stroke-width="0.441687"
                    ></path>
                  </g>
                  <g filter="url(#filter3_bd_542_62612)">
                    <path
                      d="M33.333 18.7731C33.333 18.1291 32.8104 17.6064 32.1664 17.6064H22.8332C22.3292 17.6064 21.8859 17.9261 21.726 18.4044L19.1163 26.2326L18.0429 24.0848C17.8458 23.6882 17.4433 23.4397 17 23.4397H15.8333C15.1893 23.4397 14.6667 23.9623 14.6667 24.6063C14.6667 25.2503 15.1893 25.773 15.8333 25.773H16.279L18.2903 29.7944C18.5014 30.2167 18.9459 30.4699 19.4161 30.4361C19.8862 30.4022 20.2911 30.0884 20.4404 29.6416L23.6743 19.9397H32.1664C32.8104 19.9397 33.333 19.4171 33.333 18.7731ZM32.9912 22.6149C32.535 22.1587 31.7966 22.1587 31.3416 22.6149L29.2498 24.7067L27.158 22.6149C26.7018 22.1587 25.9633 22.1587 25.5083 22.6149C25.0522 23.071 25.0522 23.8095 25.5083 24.2645L27.6001 26.3563L25.5083 28.4481C25.0522 28.9043 25.0522 29.6428 25.5083 30.0978C25.9645 30.5539 26.703 30.5539 27.158 30.0978L29.2498 28.0059L31.3416 30.0978C31.7977 30.5539 32.5362 30.5539 32.9912 30.0978C33.4474 29.6416 33.4474 28.9031 32.9912 28.4481L30.8994 26.3563L32.9912 24.2645C33.4474 23.8095 33.4474 23.0699 32.9912 22.6149Z"
                      fill="url(#paint4_linear_542_62612)"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_542_62612"
                      x="-5.22227"
                      y="-8.77783"
                      width="58.4444"
                      height="65.5557"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fegaussianblur
                        in="BackgroundImage"
                        stdDeviation="7.5"
                      ></fegaussianblur>
                      <fecomposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_542_62612"
                      ></fecomposite>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_542_62612"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter1_d_542_62612"
                      x="2.44444"
                      y="4.44434"
                      width="48.4444"
                      height="42.2222"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dy="2"></feoffset>
                      <fegaussianblur stdDeviation="5"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.00557292 0 0 0 0 0.338214 0 0 0 0 0.445833 0 0 0 1 0"
                      ></fecolormatrix>
                      <feblend
                        mode="multiply"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_542_62612"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_542_62612"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter2_b_542_62612"
                      x="-7.55556"
                      y="-0.444336"
                      width="63.1111"
                      height="48.8887"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fegaussianblur
                        in="BackgroundImage"
                        stdDeviation="6"
                      ></fegaussianblur>
                      <fecomposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_542_62612"
                      ></fecomposite>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_542_62612"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter3_bd_542_62612"
                      x="-0.333344"
                      y="2.60645"
                      width="48.6667"
                      height="42.8335"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fegaussianblur
                        in="BackgroundImage"
                        stdDeviation="7.5"
                      ></fegaussianblur>
                      <fecomposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_542_62612"
                      ></fecomposite>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dx="2" dy="3"></feoffset>
                      <fegaussianblur stdDeviation="2"></fegaussianblur>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.15375 0 0 0 0 0.522433 0 0 0 0 0.9 0 0 0 0.5 0"
                      ></fecolormatrix>
                      <feblend
                        mode="normal"
                        in2="effect1_backgroundBlur_542_62612"
                        result="effect2_dropShadow_542_62612"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_542_62612"
                        result="shape"
                      ></feblend>
                    </filter>
                    <lineargradient
                      id="paint0_linear_542_62612"
                      x1="16.6112"
                      y1="-2.67846"
                      x2="17.6443"
                      y2="47.6662"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0.2"
                      ></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint1_linear_542_62612"
                      x1="16.3524"
                      y1="37.7777"
                      x2="38.3524"
                      y2="13.111"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00BCD2"></stop>
                      <stop offset="1" stop-color="#1FE7FF"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint2_linear_542_62612"
                      x1="11.7778"
                      y1="14.6666"
                      x2="16.9301"
                      y2="39.0955"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#07A4D7"></stop>
                      <stop offset="1" stop-color="#0089B5"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint3_linear_542_62612"
                      x1="-0.444446"
                      y1="37.7631"
                      x2="32.0529"
                      y2="1.98399"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.015625"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.651042"
                        stop-color="white"
                        stop-opacity="0.880342"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint4_linear_542_62612"
                      x1="38.0062"
                      y1="20.6895"
                      x2="11.5792"
                      y2="21.3205"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0.87"
                      ></stop>
                    </lineargradient>
                  </defs>
                </svg>
              </div>
              <span class="c0166"
                ><h5 class="c0142">Maths Solver</h5></span
              ></button
            ><button
              role="tab"
              class="c0160 c0173 c016"
              aria-selected="true"
              id="2"
              aria-controls="panel2"
              title="Pdf Reader"
              tabindex="0"
            >
              <div class="c0168 c0169" style="margin-right: 0px">
                <svg
                  width="48"
                  height="48"
                  class="c0171"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.8749 6.02879C29.4918 5.64565 28.9723 5.43018 28.4305 5.43018L16.6337 5.43018C13.2815 5.43018 11.6054 5.43018 10.564 6.47158C9.52257 7.51297 9.52257 9.18908 9.52257 12.5413L9.52257 33.8746C9.52257 37.2268 9.52257 38.9029 10.564 39.9443C11.6054 40.9857 13.2815 40.9857 16.6337 40.9857H31.986C35.3382 40.9857 37.0143 40.9857 38.0557 39.9443C39.0971 38.9029 39.0971 37.2268 39.0971 33.8746V16.0968C39.0971 15.555 38.8817 15.0355 38.4985 14.6524L29.8749 6.02879Z"
                    fill="#FF433E"
                    fill-opacity="0.8"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.8749 6.02879C29.4918 5.64565 28.9723 5.43018 28.4305 5.43018L16.6337 5.43018C13.2815 5.43018 11.6054 5.43018 10.564 6.47158C9.52257 7.51297 9.52257 9.18908 9.52257 12.5413L9.52257 33.8746C9.52257 37.2268 9.52257 38.9029 10.564 39.9443C11.6054 40.9857 13.2815 40.9857 16.6337 40.9857H31.986C35.3382 40.9857 37.0143 40.9857 38.0557 39.9443C39.0971 38.9029 39.0971 37.2268 39.0971 33.8746V16.0968C39.0971 15.555 38.8817 15.0355 38.4985 14.6524L29.8749 6.02879Z"
                    fill="url(#paint0_radial_542_62611)"
                    fill-opacity="0.44"
                  ></path>
                  <g filter="url(#filter0_d_542_62611)">
                    <path
                      d="M18.6667 32.0967C16.703 32.0967 15.1111 30.5048 15.1111 28.5411L15.1111 27.6522L15.1111 26.7633C15.1111 24.7997 16.703 23.2078 18.6667 23.2078L34.6667 23.2078C36.6303 23.2078 38.2222 24.7997 38.2222 26.7633L38.2222 28.5411C38.2222 30.5048 36.6303 32.0967 34.6667 32.0967L18.6667 32.0967Z"
                      fill="#FC5050"
                    ></path>
                  </g>
                  <rect
                    x="7.11111"
                    y="35.6841"
                    width="16"
                    height="33.7778"
                    rx="3.55556"
                    transform="rotate(-90 7.11111 35.6841)"
                    fill="url(#paint1_linear_542_62611)"
                  ></rect>
                  <rect
                    x="7.11111"
                    y="35.6841"
                    width="16"
                    height="33.7778"
                    rx="3.55556"
                    transform="rotate(-90 7.11111 35.6841)"
                    fill="url(#paint2_linear_542_62611)"
                  ></rect>
                  <g filter="url(#filter1_d_542_62611)">
                    <path
                      d="M15.9048 28.8459V31.4193H14.2222V23.9492H16.8581C18.7404 23.9492 19.6815 24.7428 19.6815 26.3298C19.6815 27.08 19.4106 27.6877 18.8689 28.1531C18.3306 28.615 17.61 28.8459 16.707 28.8459H15.9048ZM15.9048 25.2411V27.5696H16.5664C17.4624 27.5696 17.9104 27.1772 17.9104 26.3923C17.9104 25.6249 17.4624 25.2411 16.5664 25.2411H15.9048Z"
                      fill="url(#paint3_linear_542_62611)"
                    ></path>
                    <path
                      d="M21.3089 31.4193V23.9492H23.9552C26.6084 23.9492 27.935 25.163 27.935 27.5905C27.935 28.7539 27.5721 29.6828 26.8463 30.3774C26.1239 31.072 25.1602 31.4193 23.9552 31.4193H21.3089ZM22.9914 25.3192V30.0544H23.8249C24.5542 30.0544 25.1255 29.8356 25.5388 29.3981C25.9555 28.9605 26.1639 28.3649 26.1639 27.6113C26.1639 26.8994 25.9572 26.3403 25.544 25.9339C25.1342 25.5241 24.5577 25.3192 23.8145 25.3192H22.9914Z"
                      fill="url(#paint4_linear_542_62611)"
                    ></path>
                    <path
                      d="M34.0267 25.3192H31.3908V27.1529H33.8131V28.5177H31.3908V31.4193H29.7082V23.9492H34.0267V25.3192Z"
                      fill="url(#paint5_linear_542_62611)"
                    ></path>
                  </g>
                  <mask id="path-5-inside-1_542_62611" fill="white">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.9466 15.1341C38.7127 15.1826 38.4703 15.208 38.222 15.208L32.8887 15.208C30.925 15.208 29.3331 13.6161 29.3331 11.6525L29.3331 7.20801C29.3331 6.71061 29.4353 6.23706 29.6197 5.8072L38.9466 15.1341Z"
                    ></path>
                  </mask>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.9466 15.1341C38.7127 15.1826 38.4703 15.208 38.222 15.208L32.8887 15.208C30.925 15.208 29.3331 13.6161 29.3331 11.6525L29.3331 7.20801C29.3331 6.71061 29.4353 6.23706 29.6197 5.8072L38.9466 15.1341Z"
                    fill="#FFB7B5"
                    fill-opacity="0.6"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.9466 15.1341C38.7127 15.1826 38.4703 15.208 38.222 15.208L32.8887 15.208C30.925 15.208 29.3331 13.6161 29.3331 11.6525L29.3331 7.20801C29.3331 6.71061 29.4353 6.23706 29.6197 5.8072L38.9466 15.1341Z"
                    fill="url(#paint6_linear_542_62611)"
                  ></path>
                  <path
                    d="M38.9466 15.1341L39.0575 15.6698L40.0503 15.4642L39.3334 14.7473L38.9466 15.1341ZM29.6197 5.8072L30.0065 5.42041L29.4354 4.84937L29.117 5.59151L29.6197 5.8072ZM38.8357 14.5985C38.638 14.6394 38.4328 14.661 38.222 14.661L38.222 15.755C38.5078 15.755 38.7873 15.7257 39.0575 15.6698L38.8357 14.5985ZM38.222 14.661L32.8887 14.661L32.8887 15.755L38.222 15.755L38.222 14.661ZM32.8887 14.661C31.2271 14.661 29.8801 13.314 29.8801 11.6525L28.7861 11.6525C28.7861 13.9182 30.6229 15.755 32.8887 15.755L32.8887 14.661ZM29.8801 11.6525L29.8801 7.20801L28.7861 7.20801L28.7861 11.6525L29.8801 11.6525ZM29.8801 7.20801C29.8801 6.78612 29.9666 6.38586 30.1224 6.02289L29.117 5.59151C28.9039 6.08827 28.7861 6.6351 28.7861 7.20801L29.8801 7.20801ZM29.2329 6.19399L38.5598 15.5209L39.3334 14.7473L30.0065 5.42041L29.2329 6.19399Z"
                    fill="url(#paint7_linear_542_62611)"
                    mask="url(#path-5-inside-1_542_62611)"
                  ></path>
                  <defs>
                    <filter
                      id="filter0_d_542_62611"
                      x="6.22223"
                      y="16.0969"
                      width="40.8889"
                      height="26.6665"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dy="1.77778"></feoffset>
                      <fegaussianblur stdDeviation="4.44444"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.945833 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      ></fecolormatrix>
                      <feblend
                        mode="multiply"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_542_62611"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_542_62611"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter1_d_542_62611"
                      x="12.4445"
                      y="23.0603"
                      width="26.9156"
                      height="14.5813"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dx="1.77778" dy="2.66667"></feoffset>
                      <fegaussianblur stdDeviation="1.77778"></fegaussianblur>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.992157 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.5 0"
                      ></fecolormatrix>
                      <feblend
                        mode="multiply"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_542_62611"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_542_62611"
                        result="shape"
                      ></feblend>
                    </filter>
                    <radialgradient
                      id="paint0_radial_542_62611"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(30.6667 13.4302) rotate(118.61) scale(11.1377 9.26421)"
                    >
                      <stop offset="0.34375" stop-color="#F93C3C"></stop>
                      <stop
                        offset="1"
                        stop-color="#F93C3C"
                        stop-opacity="0"
                      ></stop>
                    </radialgradient>
                    <lineargradient
                      id="paint1_linear_542_62611"
                      x1="9.99483"
                      y1="60.4967"
                      x2="26.766"
                      y2="63.5034"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF6161"></stop>
                      <stop offset="1" stop-color="#F52828"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint2_linear_542_62611"
                      x1="29.13"
                      y1="18.373"
                      x2="28.8295"
                      y2="100.797"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.305807" stop-color="#FF6565"></stop>
                      <stop offset="0.740651" stop-color="#F52828"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint3_linear_542_62611"
                      x1="38.9844"
                      y1="25.7438"
                      x2="10.9837"
                      y2="26.9625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0.87"
                      ></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint4_linear_542_62611"
                      x1="38.9844"
                      y1="25.7438"
                      x2="10.9837"
                      y2="26.9625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0.87"
                      ></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint5_linear_542_62611"
                      x1="38.9844"
                      y1="25.7438"
                      x2="10.9837"
                      y2="26.9625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0.87"
                      ></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint6_linear_542_62611"
                      x1="25.5494"
                      y1="20.2846"
                      x2="34.9533"
                      y2="-0.634169"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.305807" stop-color="#FF6565"></stop>
                      <stop offset="0.740651" stop-color="#F52828"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint7_linear_542_62611"
                      x1="34.1542"
                      y1="15.2514"
                      x2="31.5198"
                      y2="4.18707"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="0.76944"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                  </defs>
                </svg>
              </div>
              <span class="c0166"
                ><h5 class="c0142">PDF Reader</h5></span
              ></button
            ><button
              role="tab"
              class="c0160 c0173 c016"
              aria-selected="false"
              id="3"
              aria-controls="panel3"
              title="Immersive Reader"
              tabindex="-1"
            >
              <div class="c0168 c0169">
                <svg
                  width="48"
                  height="48"
                  class="c0171"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_542_62609)">
                    <path
                      d="M23.959 12.6328L43.5145 12.6328C45.4782 12.6328 47.0701 14.2247 47.0701 16.1884L47.0701 38.0584C47.0701 40.0221 45.4782 41.6139 43.5145 41.6139L23.959 41.6139L23.959 12.6328Z"
                      fill="url(#paint0_linear_542_62609)"
                    ></path>
                    <path
                      d="M23.959 12.6328L43.5145 12.6328C45.4782 12.6328 47.0701 14.2247 47.0701 16.1884L47.0701 38.0584C47.0701 40.0221 45.4782 41.6139 43.5145 41.6139L23.959 41.6139L23.959 12.6328Z"
                      fill="url(#paint1_linear_542_62609)"
                    ></path>
                    <path
                      d="M24.1074 12.6328L4.55187 12.6328C2.58819 12.6328 0.996311 14.2247 0.996311 16.1884L0.996311 37.9475C0.996311 39.9034 2.57594 41.492 4.53172 41.503L24.1074 41.6139L24.1074 12.6328Z"
                      fill="#6AE092"
                      fill-opacity="0.7"
                    ></path>
                    <path
                      d="M24.1074 12.6328L4.55187 12.6328C2.58819 12.6328 0.996311 14.2247 0.996311 16.1884L0.996311 37.9475C0.996311 39.9034 2.57594 41.492 4.53172 41.503L24.1074 41.6139L24.1074 12.6328Z"
                      fill="url(#paint2_linear_542_62609)"
                      fill-opacity="0.2"
                    ></path>
                    <path
                      d="M24.1074 12.6328L4.55187 12.6328C2.58819 12.6328 0.996311 14.2247 0.996311 16.1884L0.996311 37.9475C0.996311 39.9034 2.57594 41.492 4.53172 41.503L24.1074 41.6139L24.1074 12.6328Z"
                      fill="url(#paint3_radial_542_62609)"
                    ></path>
                    <g filter="url(#filter0_f_542_62609)">
                      <path
                        d="M6.97705 30.9583L7.84305 36.3686C8.15717 38.331 9.43149 39.2923 11.3016 38.9815L17.6356 37.9291C19.5364 37.6132 20.4204 36.2933 20.1063 34.3309L17.1851 32.052C13.7247 31.2883 12.9206 27.4034 12.1478 25.5539L9.44172 27.3618C7.57157 27.6726 6.65787 28.9643 6.97705 30.9583Z"
                        fill="#13AF4B"
                      ></path>
                    </g>
                    <g filter="url(#filter1_d_542_62609)">
                      <path
                        d="M38.0375 20.7229V32.9047C38.0375 33.7527 37.0822 34.2026 36.478 33.6391L33.1114 30.4994C33.0085 30.4034 32.8756 30.3505 32.7379 30.3505H29.9799C29.0485 30.3505 28.2934 29.5585 28.2934 28.5816V25.0456C28.2934 24.0687 29.0485 23.2768 29.9799 23.2768H32.7379C32.8756 23.2768 33.0085 23.2237 33.1114 23.1278L36.478 19.9885C37.0822 19.4251 38.0375 19.8749 38.0375 20.7229ZM41.0294 22.0179C41.2788 21.8241 41.6309 21.8791 41.8157 22.1408C42.7384 23.4474 43.2843 25.0655 43.2843 26.8155C43.2843 28.5656 42.7384 30.1836 41.8157 31.4903C41.6309 31.752 41.2788 31.8069 41.0294 31.6132C40.7798 31.4194 40.7274 31.0501 40.9122 30.7884C41.6964 29.678 42.16 28.3043 42.16 26.8155C42.16 25.3267 41.6964 23.9531 40.9122 22.8427C40.7274 22.581 40.7798 22.2117 41.0294 22.0179ZM39.6437 23.9613C39.9167 23.8063 40.2579 23.9127 40.4057 24.1991C40.8076 24.9779 41.0356 25.8696 41.0356 26.8155C41.0356 27.7614 40.8076 28.6532 40.4057 29.432C40.2579 29.7183 39.9167 29.8248 39.6437 29.6698C39.3707 29.5148 39.2691 29.1569 39.4169 28.8706C39.7321 28.2599 39.9113 27.5606 39.9113 26.8155C39.9113 26.0705 39.7321 25.3712 39.4169 24.7605C39.2691 24.4741 39.3707 24.1163 39.6437 23.9613Z"
                        fill="white"
                      ></path>
                    </g>
                    <path
                      d="M23.9023 41.3268L23.9023 12.9375L9.81713 8.05112C7.63991 7.29581 5.36767 8.91261 5.36767 11.2171L5.36767 32.5124C5.36767 33.9398 6.27188 35.2106 7.62045 35.6784L23.9023 41.3268Z"
                      fill="url(#paint4_linear_542_62609)"
                      stroke="url(#paint5_linear_542_62609)"
                      stroke-width="0.408889"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_542_62609"
                      x="-0.196652"
                      y="18.4426"
                      width="27.4763"
                      height="27.7076"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feblend>
                      <fegaussianblur
                        stdDeviation="3.55556"
                        result="effect1_foregroundBlur_542_62609"
                      ></fegaussianblur>
                    </filter>
                    <filter
                      id="filter1_d_542_62609"
                      x="24.7378"
                      y="17.9605"
                      width="22.102"
                      height="21.262"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dy="1.77778"></feoffset>
                      <fegaussianblur stdDeviation="1.77778"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0.6 0 0 0 0 0.219802 0 0 0 1 0"
                      ></fecolormatrix>
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_542_62609"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_542_62609"
                        result="shape"
                      ></feblend>
                    </filter>
                    <lineargradient
                      id="paint0_linear_542_62609"
                      x1="25.9219"
                      y1="41.6139"
                      x2="43.9656"
                      y2="41.6139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#009E65"></stop>
                      <stop offset="1" stop-color="#00DA8B"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint1_linear_542_62609"
                      x1="18.8361"
                      y1="12.6427"
                      x2="34.4793"
                      y2="54.8083"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#75EDA1"></stop>
                      <stop offset="1" stop-color="#349256"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint2_linear_542_62609"
                      x1="19.1118"
                      y1="39.6162"
                      x2="4.19746"
                      y2="26.3088"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#49AF6E"></stop>
                      <stop offset="1" stop-color="#67D990"></stop>
                    </lineargradient>
                    <radialgradient
                      id="paint3_radial_542_62609"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(14.2229 31.4653) rotate(97.4556) scale(13.7007 10.9327)"
                    >
                      <stop stop-color="#1BA54D"></stop>
                      <stop
                        offset="1"
                        stop-color="#1BA54D"
                        stop-opacity="0"
                      ></stop>
                    </radialgradient>
                    <lineargradient
                      id="paint4_linear_542_62609"
                      x1="9.77779"
                      y1="36.8995"
                      x2="10.2392"
                      y2="9.2771"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.525385" stop-color="#A6E1BC"></stop>
                      <stop offset="1" stop-color="#A6D1BC"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint5_linear_542_62609"
                      x1="4.44446"
                      y1="30.107"
                      x2="28.3482"
                      y2="11.0726"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="0.333572"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <clippath id="clip0_542_62609">
                      <rect width="48" height="48" fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
              </div>
              <span class="c0166"
                ><h5 class="c0142">Immersive Reader</h5></span
              ></button
            ><button
              role="tab"
              class="c0160 c0173 c016"
              aria-selected="false"
              id="4"
              aria-controls="panel4"
              title="Read Aloud"
              tabindex="-1"
            >
              <div class="c0168 c0169">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  class="c0171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_542_62606)">
                    <g filter="url(#filter0_b_542_62606)">
                      <path
                        d="M21.3333 42.667C12.4968 42.667 5.33334 35.5035 5.33334 26.667L5.33334 15.2384C5.33334 12.7137 7.38004 10.667 9.90477 10.667L21.3333 10.667C30.1699 10.667 37.3333 17.8304 37.3333 26.667C37.3333 35.5035 30.1699 42.667 21.3333 42.667Z"
                        fill="url(#paint0_linear_542_62606)"
                        fill-opacity="0.4"
                      ></path>
                    </g>
                    <g filter="url(#filter1_d_542_62606)">
                      <rect
                        x="13.3333"
                        y="35.5557"
                        width="19.5556"
                        height="19.5556"
                        rx="9.77778"
                        transform="rotate(-90 13.3333 35.5557)"
                        fill="url(#paint1_linear_542_62606)"
                      ></rect>
                      <rect
                        x="13.4976"
                        y="35.3914"
                        width="19.227"
                        height="19.227"
                        rx="9.61349"
                        transform="rotate(-90 13.4976 35.3914)"
                        stroke="url(#paint2_linear_542_62606)"
                        stroke-width="0.328577"
                      ></rect>
                    </g>
                    <g filter="url(#filter2_b_542_62606)">
                      <path
                        d="M15.2381 37.3335C12.7134 37.3335 10.6667 35.2868 10.6667 32.7621L10.6667 21.3335C10.6667 12.4969 17.8301 5.3335 26.6667 5.3335C35.5032 5.3335 42.6667 12.4969 42.6667 21.3335C42.6667 30.1701 35.5032 37.3335 26.6667 37.3335L15.2381 37.3335Z"
                        fill="url(#paint3_linear_542_62606)"
                      ></path>
                      <path
                        d="M15.2381 37.1692C12.8041 37.1692 10.831 35.1961 10.831 32.7621L10.831 21.3335C10.831 12.5877 17.9209 5.49779 26.6667 5.49778C35.4125 5.49778 42.5024 12.5877 42.5024 21.3335C42.5024 30.0793 35.4125 37.1692 26.6667 37.1692L15.2381 37.1692Z"
                        stroke="url(#paint4_linear_542_62606)"
                        stroke-width="0.328577"
                      ></path>
                    </g>
                    <g filter="url(#filter3_d_542_62606)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.4059 9.78919C25.9381 9.71294 25.508 10.0287 25.4453 10.4943C25.3825 10.9601 25.7109 11.3995 26.1786 11.4758C28.1636 11.7996 30.0826 12.7366 31.6303 14.2843C33.178 15.832 34.115 17.751 34.4387 19.736C34.5151 20.2037 34.9545 20.5321 35.4202 20.4693C35.8859 20.4065 36.2016 19.9765 36.1254 19.5086C35.7443 17.173 34.6404 14.9127 32.8211 13.0934C31.0018 11.2741 28.7416 10.1702 26.4059 9.78919ZM27.0523 13.4224C26.598 13.2812 26.1259 13.5319 25.9979 13.9822C25.8699 14.4326 26.1343 14.9121 26.5885 15.0533C27.5572 15.3543 28.474 15.8915 29.2486 16.666C30.0231 17.4405 30.5603 18.3574 30.8613 19.326C31.0024 19.7802 31.482 20.0447 31.9323 19.9166C32.3826 19.7886 32.6333 19.3165 32.4922 18.8623C32.1082 17.627 31.4227 16.4584 30.4394 15.4751C29.4561 14.4918 28.2875 13.8062 27.0523 13.4224ZM22.2659 16.2176C22.7184 16.2176 23.1249 16.4895 23.2903 16.9029L29.3441 32.0267C29.5664 32.582 29.288 33.209 28.7221 33.4272C28.1564 33.6453 27.5175 33.372 27.2952 32.8167L25.4074 28.1007H19.1243L17.2366 32.8167C17.0143 33.372 16.3754 33.6453 15.8096 33.4272C15.2438 33.209 14.9653 32.582 15.1876 32.0267L21.2414 16.9029C21.4069 16.4895 21.8133 16.2176 22.2659 16.2176ZM19.9892 25.9401H24.5426L22.2659 20.2523L19.9892 25.9401Z"
                        fill="white"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_542_62606"
                      x="-9.66666"
                      y="-4.33301"
                      width="62"
                      height="62"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fegaussianblur
                        in="BackgroundImage"
                        stdDeviation="7.5"
                      ></fegaussianblur>
                      <fecomposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_542_62606"
                      ></fecomposite>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_542_62606"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter1_d_542_62606"
                      x="-1.66666"
                      y="1"
                      width="49.5555"
                      height="49.5557"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset></feoffset>
                      <fegaussianblur stdDeviation="7.5"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.766667 0 0 0 0 0.0351389 0 0 0 0 0.0351389 0 0 0 0.55 0"
                      ></fecolormatrix>
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_542_62606"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_542_62606"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter2_b_542_62606"
                      x="1.87294"
                      y="-3.46025"
                      width="49.5875"
                      height="49.5875"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fegaussianblur
                        in="BackgroundImage"
                        stdDeviation="4.39687"
                      ></fegaussianblur>
                      <fecomposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_542_62606"
                      ></fecomposite>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_542_62606"
                        result="shape"
                      ></feblend>
                    </filter>
                    <filter
                      id="filter3_d_542_62606"
                      x="11.1111"
                      y="6.77783"
                      width="29.0256"
                      height="31.7246"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dy="1"></feoffset>
                      <fegaussianblur stdDeviation="2"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.9875 0 0 0 0 0.0246875 0 0 0 0 0.0246875 0 0 0 0.3 0"
                      ></fecolormatrix>
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_542_62606"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_542_62606"
                        result="shape"
                      ></feblend>
                    </filter>
                    <lineargradient
                      id="paint0_linear_542_62606"
                      x1="11.0176"
                      y1="18.667"
                      x2="48.4944"
                      y2="48.5354"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFBB33" stop-opacity="0.87"></stop>
                      <stop offset="1" stop-color="#E77302"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint1_linear_542_62606"
                      x1="6.06644"
                      y1="34.3395"
                      x2="18.5596"
                      y2="62.4341"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F23E2C"></stop>
                      <stop offset="1" stop-color="#FFA78F"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint2_linear_542_62606"
                      x1="8.83042"
                      y1="35.813"
                      x2="35.8097"
                      y2="52.8567"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.015625"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.651042"
                        stop-color="white"
                        stop-opacity="0.880342"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint3_linear_542_62606"
                      x1="21.8892"
                      y1="2.54042"
                      x2="-8.71173"
                      y2="31.3181"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFBB33"></stop>
                      <stop offset="0.291667" stop-color="#F4A403"></stop>
                      <stop offset="1" stop-color="#E77302"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint4_linear_542_62606"
                      x1="11.0877"
                      y1="44.7019"
                      x2="38.9774"
                      y2="0.554067"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.015625"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="0.651042"
                        stop-color="white"
                        stop-opacity="0.880342"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                    <clippath id="clip0_542_62606">
                      <rect width="48" height="48" fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
              </div>
              <span class="c0166"
                ><h5 class="c0142">Read Aloud</h5></span
              ></button
            ><button
              role="tab"
              class="c0160 c0173 c016"
              aria-selected="false"
              id="5"
              aria-controls="panel5"
              title="Citations"
              tabindex="-1"
            >
              <div class="c0168 c0169">
                <svg
                  class="c0171"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4451 42.6666C8.51773 42.6666 5.33398 39.4828 5.33398 35.5555L5.33398 23.111C5.33398 19.1836 8.51774 15.9999 12.4451 15.9999L24.8895 15.9999C28.8169 15.9999 32.0006 19.1837 32.0006 23.111L32.0007 35.5555C32.0007 39.4828 28.8169 42.6666 24.8895 42.6666L12.4451 42.6666Z"
                    fill="url(#paint0_linear_454_53583)"
                  ></path>
                  <path
                    d="M12.4451 42.6666C8.51773 42.6666 5.33398 39.4828 5.33398 35.5555L5.33398 23.111C5.33398 19.1836 8.51774 15.9999 12.4451 15.9999L24.8895 15.9999C28.8169 15.9999 32.0006 19.1837 32.0006 23.111L32.0007 35.5555C32.0007 39.4828 28.8169 42.6666 24.8895 42.6666L12.4451 42.6666Z"
                    fill="#3383FF"
                    style="mix-blend-mode: darken"
                  ></path>
                  <path
                    d="M12.9517 37.1377C11.798 37.1377 10.8628 36.2025 10.8628 35.0488L10.8628 21.3333C10.8628 12.6047 17.9387 5.52881 26.6672 5.52881C35.3958 5.52881 42.4717 12.6047 42.4717 21.3333C42.4717 30.0618 35.3958 37.1377 26.6672 37.1377L12.9517 37.1377Z"
                    fill="url(#paint1_linear_454_53583)"
                    stroke="url(#paint2_linear_454_53583)"
                    stroke-width="0.391111"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <g filter="url(#filter0_d_454_53583)">
                    <path
                      d="M21.2697 13.3331C18.902 13.3331 16.8895 15.2864 16.8895 17.5949C16.8895 19.9626 18.7244 21.916 21.0329 21.916L21.3881 21.916C21.0329 24.3429 19.4939 26.0003 17.0078 28.4271L18.6652 30.0845C23.6966 26.9473 25.9459 22.5079 25.9459 18.542C25.9459 15.168 23.6374 13.3331 21.2697 13.3331ZM32.8714 13.3331C30.5037 13.3331 28.4912 15.2864 28.4912 17.5949C28.4912 19.9626 30.3261 21.916 32.6346 21.916L32.9898 21.916C32.6346 24.3429 31.0956 26.0003 28.6096 28.4271L30.2669 30.0845C35.2983 26.9473 37.5476 22.5079 37.5476 18.542C37.5476 15.168 35.2391 13.3331 32.8714 13.3331Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_454_53583"
                      x="13.3338"
                      y="13.3331"
                      width="27.7693"
                      height="23.8626"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feflood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feflood>
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></fecolormatrix>
                      <feoffset dy="3.55556"></feoffset>
                      <fegaussianblur stdDeviation="1.77778"></fegaussianblur>
                      <fecomposite in2="hardAlpha" operator="out"></fecomposite>
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.121569 0 0 0 0 0.396078 0 0 0 0 0.945098 0 0 0 0.6 0"
                      ></fecolormatrix>
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_454_53583"
                      ></feblend>
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_454_53583"
                        result="shape"
                      ></feblend>
                    </filter>
                    <lineargradient
                      id="paint0_linear_454_53583"
                      x1="11.7437"
                      y1="46.2066"
                      x2="25.6027"
                      y2="23.7265"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1636D5"></stop>
                      <stop offset="0.760417" stop-color="#1E76F6"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint1_linear_454_53583"
                      x1="37.3339"
                      y1="9.7777"
                      x2="9.77835"
                      y2="35.111"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.292514" stop-color="#9BCAFE"></stop>
                      <stop offset="1" stop-color="#2E78F2"></stop>
                    </lineargradient>
                    <lineargradient
                      id="paint2_linear_454_53583"
                      x1="14.3953"
                      y1="32.2394"
                      x2="39.6768"
                      y2="11.8268"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.25"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </lineargradient>
                  </defs>
                </svg>
              </div>
              <span class="c0166"><h5 class="c0142">Citations</h5></span>
            </button>
          </div>
          <div id="featureContentPanel" class="c0110"></div>
        </div>
      </div>
    </div>
    <script
      type="module"
      src="edge://learning/lib_fast_deprecated.chunk.js"
    ></script>
    <script type="module" src="edge://learning/lib_react.chunk.js"></script>
    <script type="module" src="edge://learning/edu-zone.bundle.js"></script>
  </body>
</html>
