export const homeView = () => `
<div class="po-wrapper">
  <po-menu [p-menus]="menus"></po-menu>
  <router-outlet></router-outlet>
</div>
`;
