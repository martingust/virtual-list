declare module 'aurelia-router' {
  import core from 'core-js';
  import { Container }  from 'aurelia-dependency-injection';
  import { RouteRecognizer }  from 'aurelia-route-recognizer';
  import { join }  from 'aurelia-path';
  import { History }  from 'aurelia-history';
  import { EventAggregator }  from 'aurelia-event-aggregator';
  import * as LogManager from 'aurelia-logging';
  export function processPotential(obj: any, resolve: any, reject: any): any;
  export function normalizeAbsolutePath(path: any, hasPushState: any): any;
  export function createRootedPath(fragment: any, baseUrl: any, hasPushState: any): any;
  export function resolveUrl(fragment: any, baseUrl: any, hasPushState: any): any;
  
  /**
   * Determines if the provided object is a navigation command.
   * A navigation command is anything with a navigate method.
   * @param {object} obj The item to check.
   * @return {boolean}
   */
  export function isNavigationCommand(obj: any): any;
  
  /**
  * Used during the activation lifecycle to cause a redirect.
  *
  * @class Redirect
  * @constructor
  * @param {String} url The url to redirect to.
  */
  export class Redirect {
    constructor(url: any, options: any);
    
    /**
      * Called by the activation system to set the child router.
      *
      * @method setRouter
      * @param {Router} router
      */
    setRouter(router: any): any;
    
    /**
      * Called by the navigation pipeline to navigate.
      *
      * @method navigate
      * @param {Router} appRouter - a router which should redirect
      */
    navigate(appRouter: any): any;
  }
  export const activationStrategy: any;
  export function buildNavigationPlan(navigationContext: any, forceLifecycleMinimum: any): any;
  export class BuildNavigationPlanStep {
    run(navigationContext: any, next: any): any;
  }
  export var affirmations: any;
  export class CanDeactivatePreviousStep {
    run(navigationContext: any, next: any): any;
  }
  export class CanActivateNextStep {
    run(navigationContext: any, next: any): any;
  }
  export class DeactivatePreviousStep {
    run(navigationContext: any, next: any): any;
  }
  export class ActivateNextStep {
    run(navigationContext: any, next: any): any;
  }
  export class NavigationContext {
    constructor(router: any, nextInstruction: any);
    getAllContexts(acc?: any): any;
    nextInstructions(): any;
    currentInstructions(): any;
    prevInstructions(): any;
    commitChanges(waitToSwap: any): any;
    updateTitle(): any;
    buildTitle(separator?: any): any;
  }
  export class CommitChangesStep {
    run(navigationContext: any, next: any): any;
  }
  export class NavigationInstruction {
    constructor(fragment: any, queryString: any, params: any, queryParams: any, config: any, parentInstruction: any);
    addViewPortInstruction(viewPortName: any, strategy: any, moduleId: any, component: any): any;
    getWildCardName(): any;
    getWildcardPath(): any;
    getBaseUrl(): any;
  }
  
  /**
   * Class for storing and interacting with a route's navigation settings
   *
   * @class NavModel
   * @constructor
   */
  export class NavModel {
    constructor(router: any, relativeHref: any);
    
    /**
       * Sets the route's title and updates document.title.
       *  If the a navigation is in progress, the change will be applied
       *  to document.title when the navigation completes.
       *
       * @method setTitle
       * @param {String} title The new title.
       */
    setTitle(title: any): any;
  }
  export class RouteFilterContainer {
    static inject(): any;
    constructor(container: any);
    addStep(name: any, step: any, index?: any): any;
    getFilterSteps(name: any): any;
  }
  export function createRouteFilterStep(name: any): any;
  class RouteFilterStep {
    constructor(name: any, routeFilterContainer: any);
    getSteps(): any;
  }
  export class RouterConfiguration {
    constructor();
    addPipelineStep(name: any, step: any): any;
    map(route: any): any;
    mapRoute(config: any): any;
    mapUnknownRoutes(config: any): any;
    exportToRouter(router: any): any;
  }
  export class Router {
    constructor(container: any, history: any);
    isRoot(): any;
    registerViewPort(viewPort: any, name: any): any;
    refreshBaseUrl(): any;
    refreshNavigation(): any;
    configure(callbackOrConfig: any): any;
    navigate(fragment: any, options: any): any;
    navigateToRoute(route: any, params: any, options: any): any;
    navigateBack(): any;
    createChild(container: any): any;
    createNavigationInstruction(url?: any, parentInstruction?: any): any;
    createNavigationContext(instruction: any): any;
    generate(name: any, params: any): any;
    createNavModel(config: any): any;
    addRoute(config: any, navModel: any): any;
    hasRoute(name: any): any;
    hasOwnRoute(name: any): any;
    handleUnknownRoutes(config: any): any;
    updateTitle(): any;
    reset(): any;
  }
  export const pipelineStatus: any;
  export class Pipeline {
    constructor();
    withStep(step: any): any;
    run(ctx: any): any;
  }
  export class RouteLoader {
    loadRoute(router: any, config: any): any;
  }
  export class LoadRouteStep {
    static inject(): any;
    constructor(routeLoader: any);
    run(navigationContext: any, next: any): any;
  }
  export function loadNewRoute(routeLoader: any, navigationContext: any): any;
  export class PipelineProvider {
    static inject(): any;
    constructor(container: any);
    createPipeline(navigationContext: any): any;
  }
  export class AppRouter extends Router {
    static inject(): any;
    constructor(container: any, history: any, pipelineProvider: any, events: any);
    isRoot(): any;
    loadUrl(url: any): any;
    queueInstruction(instruction: any): any;
    dequeueInstruction(instructionCount?: any): any;
    registerViewPort(viewPort: any, name: any): any;
    activate(options: any): any;
    deactivate(): any;
    reset(): any;
  }
}