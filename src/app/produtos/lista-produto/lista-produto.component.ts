import { Component,OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
 templateUrl:'lista-produto.component.html'
})
export class ListaProdutoComponent  implements OnInit{
public produtos?:Produto[];
constructor(private produtosService:ProdutosService){}

  ngOnInit(): void {
    this.produtosService.ObterProduto()
    .subscribe({
      next:produtos=>{
        this.produtos=produtos;
        console.log(produtos)
      },
      error: e=>console.log(e)
    })
  }

}
