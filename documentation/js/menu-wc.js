'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">learn-nest-js documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' : 'data-bs-target="#xs-controllers-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' :
                                            'id="xs-controllers-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' : 'data-bs-target="#xs-injectables-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' :
                                        'id="xs-injectables-links-module-AppModule-20a5ccc2b140173cf3baab07158e85e1e4ffac1ebb10038d7c4d434deeee286fad88cfb8e8f27788856b9dbc078acd2b1cd5553b6f769446bd96e7a51fd98ad1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' : 'data-bs-target="#xs-controllers-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' :
                                            'id="xs-controllers-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' : 'data-bs-target="#xs-injectables-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' :
                                        'id="xs-injectables-links-module-PostModule-d19b30f0aa4ae9868b6906a528d4221dca6ffadbe447630efc5f33b4a609d134af4f696e4d5f39419a11e8ff7ebd40da8d9f124035346aaa41c0deb1d3e01f08"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' : 'data-bs-target="#xs-controllers-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' :
                                            'id="xs-controllers-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' : 'data-bs-target="#xs-injectables-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' :
                                        'id="xs-injectables-links-module-UserModule-c1afe1b7699b21a2f6e088fb2202a4f83c57e93e1ad69f678a9249baf640af980990280e0cfc8cd6acd2ae6a982cd723cd164fff6325f7d9961b506bf6fc24ad"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});