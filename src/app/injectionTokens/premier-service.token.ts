import { InjectionToken } from '@angular/core';
import { PremierServiceService } from '../services/premier-service.service';

export const PREMIER_SERVICE_TOKEN = new InjectionToken<PremierServiceService>(
  'PREMIER_SERVICE_TOKEN'
);
