import { InjectionToken } from '@angular/core';

export const INJECTOR_ENV = new InjectionToken<IEnvironment>('INJECTOR.ENV');

export interface IEnvironment {
    production: boolean;
}
