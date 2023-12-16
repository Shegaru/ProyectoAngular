import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const validateSessionGuard: CanActivateFn = (route, state) => {
  const cookie : string | null = null;
  const router = inject(Router);

  function checkCookie(){
    if(cookie !== null){
      return true;
    }else{
      console.log('ingresa aca', router);
      router.navigate(['/', 'auth', 'login']);
      return false;
    }
  }

  return checkCookie();
};
