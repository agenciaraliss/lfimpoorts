# LF Impoorts — layout personalizado

Reforma completa do layout da loja **LF Impoorts** (Nuvemshop, tema Recife), feita pela **Agência Raliss · Sites com a Lari**.

Tudo continua ligado ao painel: produtos, preços, variações, estoque, categorias, menus, banners, textos das páginas e contatos vêm da Nuvemshop. O script só muda a apresentação e não substitui o checkout nem os formulários nativos.

## Como instalar (sem piscar o layout antigo)

1. **CSS anti-piscada:** cole `head-anti-flicker.css` no campo de **CSS do tema** (Personalizar → Edição de CSS). Ele carrega no topo da página e deixa a loja invisível até o layout novo estar montado. Se algo falhar, a loja aparece sozinha em 2,5 s.
2. **Script:** cole no campo de scripts do **rodapé** a linha `<script src="https://cdn.jsdelivr.net/gh/agenciaraliss/lfimpoorts@VERSAO/lf-impoorts.js"></script>`, com VERSAO = commit publicado. O arquivo tem cerca de 55 KB comprimido e fica em cache.
3. Confira no celular e no computador.

### Atualizar

Faça as alterações em `src/`, gere o `lf-impoorts.js`, crie uma tag nova (`v1.0.1`) e troque a versão no snippet do rodapé. Usar tag fixa evita cache velho.

> O CSS do layout é injetado pelo próprio script porque o campo de CSS do painel apaga propriedades como `var()`, `mask`, `inset` e `stroke`.

## Estrutura

| Pasta | O que tem |
|---|---|
| `src/` | Um arquivo por módulo, na ordem de carregamento testada |
| `lf-impoorts.js` | Todos os módulos num arquivo só (é o que a loja carrega) |
| `head-anti-flicker.css` | CSS anti-piscada para o campo de CSS do tema |

Os módulos principais são estes:

- **Base:** `00-core` traz os utilitários (`LF.$`, `LF.add`, `LF.run`, ícones, menu do painel).
- **Topo:** `10-header`, `11-drawer` e `12-mobile` cuidam do cabeçalho, do menu lateral, do menu do celular e da busca ao vivo.
- **Home:** `20-infobanner` e `24-infobanner-mob` fazem a faixa de benefícios. Os módulos `30`–`41` cuidam de vitrines, Para elas/eles, marcas, aromas e atacado.
- **Rodapé:** `50-footer` e `51/52` cuidam do rodapé, da newsletter, do rastreio e do selo.
- **Produto:** `60`–`69`, `96`, `97` e `99` cuidam da página de produto, das variações com frasquinho, do frete, do esgotado e da sincronização da variação.
- **Categoria e busca:** `70-category` e `95-loadmore` fazem a categoria e a busca, carregando todos os produtos ao rolar.
- **Pop-up e sacola:** `80`–`88` e `98` cuidam do pop-up "Comprar" e da sacola lateral.
- **Páginas:** `90-pages` faz as institucionais, a FAQ em sanfona, Quem Somos, contato, conta e 404.

### Regras importantes

- Formulários com verificação anti-robô (Cloudflare Turnstile / reCAPTCHA) **nunca são movidos de lugar**, só estilizados. Mover o formulário quebra a verificação.
- A variação escolhida no layout é sempre sincronizada com a variação nativa, que é a que vai para a sacola.
- O ESC fecha tudo que tem X: menu, busca, filtros, pop-up e sacola.

## Paleta de cores

| Uso | Cor |
|---|---|
| Preto principal (textos, botões) | `#141210` |
| Preto profundo (fundos escuros) | `#0F0E0D` |
| Dourado principal | `#C9A961` |
| Dourado claro (destaques sobre preto) | `#E6CF98` |
| Dourado escuro (textos e links dourados) | `#A8843F` |
| Dourado médio (gradientes, bordas) | `#B8924A` |
| Dourado suave (ícones sobre preto) | `#D9BD7C` |
| Marfim (fundo do topo, menus) | `#FAF7F2` |
| Creme (texto claro sobre preto) | `#F5F0E7` |
| Fundo das páginas | `#F4F2EF` |
| Campos de formulário | `#FAF8F5` |
| Branco (cards) | `#FFFFFF` |
| Cinza quente (textos secundários) | `#7A736A` / `#8A837A` / `#9A9288` |
| Marrom-acinzentado (textos de parágrafo) | `#4A443D` / `#5A534B` |
| Bordas claras | `#ECE5DA` / `#EFE8DE` |

**Gradiente dourado:** `linear-gradient(120deg, #B8924A, #E6CF98 50%, #B8924A)`

**Fontes:** Marcellus (títulos) e Libre Franklin (textos).

## Pendências do lado da loja

- **Aromas:** a seção "Qual aroma é você?" fica mais precisa quando a cliente cria subcategorias de aroma (Floral, Amadeirado…) e coloca os perfumes nelas.
- **Fotos Para elas / Para eles:** as imagens originais no ImgBB têm cerca de 1,9 MB. O ideal é subir versões compactadas (.webp, cerca de 150 KB) e trocar os links em `05-preload`.
- **Catálogo de atacado:** o link público da Vendizap precisa estar ativo.
- **Área logada (Meus pedidos, dados da conta):** está estilizada pelo padrão do tema e precisa ser conferida com uma conta de cliente logada.
