import { LoggerService } from '../services/logger.service';
import { PremierServiceService } from '../services/premier-service.service';

export const premierServiceProviderFactory = (logger: LoggerService) => {
  return new PremierServiceService(logger);
};
