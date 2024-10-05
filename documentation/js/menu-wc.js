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
                    <a href="index.html" data-type="index-link">country-app documentation</a>
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
                                            'data-bs-target="#components-links-module-AppModule-14afd4291d5b79d6079415b74e58da056e1e196a1668ed3940bb7dd398a1268c33f1f5becba4d0ee577d4dedab9bff68977ac9ec63b3bb68fe1eb418b4a722ea"' : 'data-bs-target="#xs-components-links-module-AppModule-14afd4291d5b79d6079415b74e58da056e1e196a1668ed3940bb7dd398a1268c33f1f5becba4d0ee577d4dedab9bff68977ac9ec63b3bb68fe1eb418b4a722ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-14afd4291d5b79d6079415b74e58da056e1e196a1668ed3940bb7dd398a1268c33f1f5becba4d0ee577d4dedab9bff68977ac9ec63b3bb68fe1eb418b4a722ea"' :
                                            'id="xs-components-links-module-AppModule-14afd4291d5b79d6079415b74e58da056e1e196a1668ed3940bb7dd398a1268c33f1f5becba4d0ee577d4dedab9bff68977ac9ec63b3bb68fe1eb418b4a722ea"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CountriesModule-83d20f2f8ca1f19e323e552302d58adbdc6951f939c3f6f427f46065b1d53933637d9d7c12c4e4c53fa21b6578d033446b151fd99bdad859683794aafcac33ce"' : 'data-bs-target="#xs-components-links-module-CountriesModule-83d20f2f8ca1f19e323e552302d58adbdc6951f939c3f6f427f46065b1d53933637d9d7c12c4e4c53fa21b6578d033446b151fd99bdad859683794aafcac33ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountriesModule-83d20f2f8ca1f19e323e552302d58adbdc6951f939c3f6f427f46065b1d53933637d9d7c12c4e4c53fa21b6578d033446b151fd99bdad859683794aafcac33ce"' :
                                            'id="xs-components-links-module-CountriesModule-83d20f2f8ca1f19e323e552302d58adbdc6951f939c3f6f427f46065b1d53933637d9d7c12c4e4c53fa21b6578d033446b151fd99bdad859683794aafcac33ce"' }>
                                            <li class="link">
                                                <a href="components/ByCapitalPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ByCapitalPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ByCountryPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ByCountryPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ByRegionPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ByRegionPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CountryPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesRoutingModule.html" data-type="entity-link" >CountriesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-970be24d2e8e1342d62a583a116692c94246c8c5a3a8618c3f3bf9fc15b5e42aec85c3911d4c225ed72726fbe76a4beb3038c3a7a7001700dcf4973e1d02e10c"' : 'data-bs-target="#xs-components-links-module-SharedModule-970be24d2e8e1342d62a583a116692c94246c8c5a3a8618c3f3bf9fc15b5e42aec85c3911d4c225ed72726fbe76a4beb3038c3a7a7001700dcf4973e1d02e10c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-970be24d2e8e1342d62a583a116692c94246c8c5a3a8618c3f3bf9fc15b5e42aec85c3911d4c225ed72726fbe76a4beb3038c3a7a7001700dcf4973e1d02e10c"' :
                                            'id="xs-components-links-module-SharedModule-970be24d2e8e1342d62a583a116692c94246c8c5a3a8618c3f3bf9fc15b5e42aec85c3911d4c225ed72726fbe76a4beb3038c3a7a7001700dcf4973e1d02e10c"' }>
                                            <li class="link">
                                                <a href="components/AboutPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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