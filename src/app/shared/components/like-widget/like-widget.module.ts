import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueServiceId } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

@NgModule({
    declarations: [LikeWidgetComponent],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [LikeWidgetComponent],
    providers: [UniqueServiceId]
})
export class LikeWidgetModule {}