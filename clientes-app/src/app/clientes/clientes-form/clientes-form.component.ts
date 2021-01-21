import { Component, OnInit } from '@angular/core';
import { ClientesModule } from '../clientes.module';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;


  constructor(private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
    let params = this.activatedRouter.params;
    if (oarams && params.getValue && params.value.id) {
      this.id = params.value.id;
      this.service
        .getClientesById(this.id)
        .subscribe(response => {
          this.cliente = response;
        } , reject => {

          }
        )
    }


  }

  onSubmit() {
    this.service.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
        console.log(response);

      }, errorResponse => {
        this.errors = errorResponse.error.erros;
        this.success = false;
      })

  }


  voltarParaListagem() {
    this.router.navigate(['/clientes-lista']);
  }

}
