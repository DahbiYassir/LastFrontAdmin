import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { AgentComponent } from 'src/app/components/agent/agent.component';
import { AllagentComponent } from 'src/app/components/allagent/allagent.component';
import { AgenceComponent } from 'src/app/components/agence/agence.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "agence", component: AgenceComponent,canActivate: [AuthGuardService]  },
  { path: "allAgent", component: AllagentComponent,canActivate: [AuthGuardService]  },
  { path: "agent", component: AgentComponent,canActivate: [AuthGuardService]  },
  //{ path: "dashboard", component: DashboardComponent },
  //{ path: "icons", component: IconsComponent },
  //{ path: "maps", component: MapComponent },
  //{ path: "notifications", component: NotificationsComponent },
  //{ path: "user", component: UserComponent },
  //{ path: "tables", component: TablesComponent },
  //{ path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
