import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, AnimationController, IonTitle, LoadingController } from '@ionic/angular';
import { Info } from 'src/app/models/info';
import { Result } from 'src/app/models/result';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  info!: Info;
  results!: Result[];
  pageNumber: number = 1;

  @ViewChild(IonTitle, {read: ElementRef})
  profileTitle!: ElementRef<HTMLIonTitleElement>

  constructor(
    private animationController: AnimationController,
    private api: ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  /* Animacion para el header de la pagina */
  viewChildAnimation() {
    if (this.profileTitle) {
      console.log('Componente ion-title iniciado')
      this.animationController.create()
      .addElement(this.profileTitle.nativeElement)
      .duration(5000)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')
      .play();
    } else {
      console.log('Componente ion-title no iniciado')
    }
  }

  selectorAnimation() {
    const el = document.querySelector('#profileTitle')
    if (el) {
      console.log('Componente selector ion-title iniciado')
      this.animationController.create()
      .addElement(el)
      .duration(1500)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.1, transform: 'scale(1)', opacity: '1' },
        { offset: 0.11, transform: 'translateX(100px)', opacity: '1' },
        { offset: 0.15, transform: 'translateX(200px)', opacity: '1' },
        { offset: 0.2, transform: 'translateX(100px)', opacity: '1' },
        { offset: 0.3, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 0.5, transform: 'scale(2)', opacity: '0.1' },
        { offset: 0.8, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]).play();
    } else {
      console.log('Componente selector ion-title no iniciado')
    }
  }

  backPage() {
    this.pageNumber--;
    this.loadPage();
  }

  forwardPage() {
    this.pageNumber++;
    this.loadPage();
  }

  async loadPage() {
    const loader = await this.loadingController.create({
      message: 'Cargando...'
    });
    loader.present()
    this.api.getData(this.pageNumber).subscribe((data) => {
      this.info = data.info;
      this.results = data.results;
      console.log(data);
      loader.dismiss();
    }, (error) => {
      console.log(error);
      loader.dismiss();
      this.alertController.create({
        header: 'Error al cargar',
        message: error,
      })
      .then(a => a.present());
    });
  }

  ngOnInit() {
    this.loadPage();
  }

  ngAfterViewInit(): void {
    this.viewChildAnimation()
    this.selectorAnimation();
  }

}
