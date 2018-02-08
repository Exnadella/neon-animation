/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   animations/cascaded-animation.html
 */

/// <reference path="../../polymer/types/polymer.d.ts" />
/// <reference path="../neon-animation-behavior.d.ts" />

/**
 * `<cascaded-animation>` applies an animation on an array of elements with a delay between each.
 * the delay defaults to 50ms.
 *
 * Configuration:
 * ```
 * {
 *   name: 'cascaded-animation',
 *   animation: <animation-name>,
 *   nodes: <array-of-nodes>,
 *   nodeDelay: <node-delay-in-ms>,
 *   timing: <animation-timing>
 * }
 * ```
 */
interface CascadedAnimationElement extends Polymer.Element, Polymer.NeonAnimationBehavior {
  complete(): any;
  configure(config: {animation: string, nodes: Element[], nodeDelay?: number, timing?: object|null}): any;
}

interface HTMLElementTagNameMap {
  "cascaded-animation": CascadedAnimationElement;
}
