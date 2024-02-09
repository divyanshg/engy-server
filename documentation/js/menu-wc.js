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
                    <a href="index.html" data-type="index-link">engy-server documentation</a>
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
                                        'data-bs-target="#injectables-links-module-AppModule-151bbf3be78d52c755b4b40e47315e48b6d1bf34cba8af9f030e5315602ab6b7aefcabf18d51c5be5f0e3057b0fe1ddff8d4424975213f10e9386d2f8ea59c33"' : 'data-bs-target="#xs-injectables-links-module-AppModule-151bbf3be78d52c755b4b40e47315e48b6d1bf34cba8af9f030e5315602ab6b7aefcabf18d51c5be5f0e3057b0fe1ddff8d4424975213f10e9386d2f8ea59c33"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-151bbf3be78d52c755b4b40e47315e48b6d1bf34cba8af9f030e5315602ab6b7aefcabf18d51c5be5f0e3057b0fe1ddff8d4424975213f10e9386d2f8ea59c33"' :
                                        'id="xs-injectables-links-module-AppModule-151bbf3be78d52c755b4b40e47315e48b6d1bf34cba8af9f030e5315602ab6b7aefcabf18d51c5be5f0e3057b0fe1ddff8d4424975213f10e9386d2f8ea59c33"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' :
                                            'id="xs-controllers-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' :
                                        'id="xs-injectables-links-module-AuthModule-2e4d6055545b29218f035a7b40a216030bed5f8cab397ac82f491fb460b1699f2787d13b11d6034d3ae378e406ff115912bc5042d01a6cbb2dc9a3e0aace8ed6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayModule.html" data-type="entity-link" >GatewayModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MediaServerModule.html" data-type="entity-link" >MediaServerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MediaServerModule-1ae0e41cdab05e7b8f6cbe4232e1d69ca669c16838e5ce3f68e49a507dc9ec81dba9c2b0d523c8588ccb67a6ce9058c880794217b656a0e22e057906b1ec1558"' : 'data-bs-target="#xs-injectables-links-module-MediaServerModule-1ae0e41cdab05e7b8f6cbe4232e1d69ca669c16838e5ce3f68e49a507dc9ec81dba9c2b0d523c8588ccb67a6ce9058c880794217b656a0e22e057906b1ec1558"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MediaServerModule-1ae0e41cdab05e7b8f6cbe4232e1d69ca669c16838e5ce3f68e49a507dc9ec81dba9c2b0d523c8588ccb67a6ce9058c880794217b656a0e22e057906b1ec1558"' :
                                        'id="xs-injectables-links-module-MediaServerModule-1ae0e41cdab05e7b8f6cbe4232e1d69ca669c16838e5ce3f68e49a507dc9ec81dba9c2b0d523c8588ccb67a6ce9058c880794217b656a0e22e057906b1ec1558"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RoomService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-975ac4420469bba6e630a9926b9e8cf41cc8171e38dbaa2383650a3b80b75c7a38b4d19dda86e757e12b97c9c996c1a5d943331fb588d8a5e697d7daf36d7891"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-975ac4420469bba6e630a9926b9e8cf41cc8171e38dbaa2383650a3b80b75c7a38b4d19dda86e757e12b97c9c996c1a5d943331fb588d8a5e697d7daf36d7891"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-975ac4420469bba6e630a9926b9e8cf41cc8171e38dbaa2383650a3b80b75c7a38b4d19dda86e757e12b97c9c996c1a5d943331fb588d8a5e697d7daf36d7891"' :
                                        'id="xs-injectables-links-module-PrismaModule-975ac4420469bba6e630a9926b9e8cf41cc8171e38dbaa2383650a3b80b75c7a38b4d19dda86e757e12b97c9c996c1a5d943331fb588d8a5e697d7daf36d7891"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomModule.html" data-type="entity-link" >RoomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' : 'data-bs-target="#xs-controllers-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' :
                                            'id="xs-controllers-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' }>
                                            <li class="link">
                                                <a href="controllers/PropertyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RoomController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' : 'data-bs-target="#xs-injectables-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' :
                                        'id="xs-injectables-links-module-RoomModule-6053514791826c8176b98808f8d44ad3f6700ad4607e7d0be99ebd4d2623616f528c1a5b5e1ed32c7768f2053a6db0c7c82ee0a4b680496465779b4993a2ce70"' }>
                                        <li class="link">
                                            <a href="injectables/PropertyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RoomService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-92ff9e3ae38c384da47d20b1e336a686c7f4db1bee0e3e59a0d40f208dbb52dc05f0fc4a79ae30a5417d1b4edb0cc39cd16ecaaa0aebb82818f718da94bf92ea"' : 'data-bs-target="#xs-injectables-links-module-UserModule-92ff9e3ae38c384da47d20b1e336a686c7f4db1bee0e3e59a0d40f208dbb52dc05f0fc4a79ae30a5417d1b4edb0cc39cd16ecaaa0aebb82818f718da94bf92ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-92ff9e3ae38c384da47d20b1e336a686c7f4db1bee0e3e59a0d40f208dbb52dc05f0fc4a79ae30a5417d1b4edb0cc39cd16ecaaa0aebb82818f718da94bf92ea"' :
                                        'id="xs-injectables-links-module-UserModule-92ff9e3ae38c384da47d20b1e336a686c7f4db1bee0e3e59a0d40f208dbb52dc05f0fc4a79ae30a5417d1b4edb0cc39cd16ecaaa0aebb82818f718da94bf92ea"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/ApiResponse.html" data-type="entity-link" >ApiResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePropertyDto.html" data-type="entity-link" >CreatePropertyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoomDto.html" data-type="entity-link" >CreateRoomDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayProvider.html" data-type="entity-link" >GatewayProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Room.html" data-type="entity-link" >Room</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoomDto.html" data-type="entity-link" >UpdateRoomDto</a>
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
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/InputData.html" data-type="entity-link" >InputData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OutputData.html" data-type="entity-link" >OutputData</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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