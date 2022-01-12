

// USER
 {/user/registrar, POST} route +2ms
{/user/registrar-admin, POST} route +2ms
 {/user/buscar/:id, GET} route +1ms
{/user/buscar/name/:username, GET} route +1ms
 {/user/buscar-todos, GET} route +1ms
{/user/super-find-all, GET} route +1ms
 {/user/deletar/:id, DELETE} route +1ms


 //COMPANY
 {/company}: +0ms
{/company/registrar, POST} route +1ms
 {/company/todas, GET} 
route +2ms
 {/company/:id, GET} route +2ms
 {/company/:id, PATCH} 
route +1ms
{/company/:id, DELETE} route +1ms

//CATEGORY
{/category}: +0ms
 {/category/cadastrar, POST} route +4ms
{/category/todas, GET} route +1ms
 {/category/:id, GET} route +0ms
{/category/:id, DELETE} route +1ms

//PRODUCT
{/product}: +1ms
{/product/cadastrar, POST} route +0ms
20 {/product/all, GET} 
{/product/:id, GET} route +0ms
 {/product/:id, PATCH} // EDITAR
{/product/apagar/:id, DELETE} 

//LOGIN
{/auth/login, POST} 
{/auth/login-company, POST} route +1ms{/auth/me, GET} route 
