import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ExpectedConditions } from "protractor";
import { UniqueServiceId } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            // Abordagem indicada para TDD 

            // declarations: [LikeWidgetComponent],
            // providers: [UniqueServiceId], 
            // imports:[FontAwesomeModule],

            // Abordagem indicada para Componente Implementado antes do teste 
            imports:[LikeWidgetModule]

        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
    });

    it('Should create component', ()=> {
        expect(component).toBeTruthy();
    });

    it('Should auto-generate ID during NgOninit when (@Input id) is not assigned', () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
        // Tem que ter um valor diferente de nulo 
    });

    it('Should NOT generate ID during NgOninit when (@Input id) is assigned', () => {
        const someId = 'someiD'
        component.id = someId
        fixture.detectChanges();
        expect(component.id).toBe(someId);
        // Tem que ter um valor diferente de nulo 
    });

    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, 'emit')
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled()
        
      //   solution use 'done' 
          // component.liked.subscribe(()=> {
          //     expect(true).toBeTrue()
          // })
          // done();
    })
    

})