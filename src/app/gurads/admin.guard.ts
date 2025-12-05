import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {


 const _authService = inject(AuthserviceService);
  const _router = inject(Router);

  const isAdmin = _authService.isAdmin();
    if (!isAdmin) {
      // Redirect non-admin users
      return _router.createUrlTree(['/unauthorized']);
    }
  return true;
};
