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
                                            'data-bs-target="#components-links-module-AppModule-fe122a96b81e4b647542a0d3483ded77b391a84807d3fc7baa43d38d6277b4cfd70d86558518971e8ed12b9cfae11abdf936630fd569eb0095927b163e8911e6"' : 'data-bs-target="#xs-components-links-module-AppModule-fe122a96b81e4b647542a0d3483ded77b391a84807d3fc7baa43d38d6277b4cfd70d86558518971e8ed12b9cfae11abdf936630fd569eb0095927b163e8911e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fe122a96b81e4b647542a0d3483ded77b391a84807d3fc7baa43d38d6277b4cfd70d86558518971e8ed12b9cfae11abdf936630fd569eb0095927b163e8911e6"' :
                                            'id="xs-components-links-module-AppModule-fe122a96b81e4b647542a0d3483ded77b391a84807d3fc7baa43d38d6277b4cfd70d86558518971e8ed12b9cfae11abdf936630fd569eb0095927b163e8911e6"' }>
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
                                            'data-bs-target="#components-links-module-CountriesModule-6feacf2660bc99c0b1d6daecb923bd021893a1fd5a0119e0d203d027cb320533adbaca588943e7818c087511f19d31605f2a6d480b588512839a6962feb8bb33"' : 'data-bs-target="#xs-components-links-module-CountriesModule-6feacf2660bc99c0b1d6daecb923bd021893a1fd5a0119e0d203d027cb320533adbaca588943e7818c087511f19d31605f2a6d480b588512839a6962feb8bb33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountriesModule-6feacf2660bc99c0b1d6daecb923bd021893a1fd5a0119e0d203d027cb320533adbaca588943e7818c087511f19d31605f2a6d480b588512839a6962feb8bb33"' :
                                            'id="xs-components-links-module-CountriesModule-6feacf2660bc99c0b1d6daecb923bd021893a1fd5a0119e0d203d027cb320533adbaca588943e7818c087511f19d31605f2a6d480b588512839a6962feb8bb33"' }>
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
                                            <li class="link">
                                                <a href="components/CountryTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountryTableComponent</a>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CountriesService.html" data-type="entity-link" >CountriesService</a>
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
                                <a href="interfaces/CapitalInfo.html" data-type="entity-link" >CapitalInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Car.html" data-type="entity-link" >Car</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Clp.html" data-type="entity-link" >Clp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CoatOfArms.html" data-type="entity-link" >CoatOfArms</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Currencies.html" data-type="entity-link" >Currencies</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Demonyms.html" data-type="entity-link" >Demonyms</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Eng.html" data-type="entity-link" >Eng</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Flags.html" data-type="entity-link" >Flags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Idd.html" data-type="entity-link" >Idd</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Languages.html" data-type="entity-link" >Languages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Maps.html" data-type="entity-link" >Maps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name.html" data-type="entity-link" >Name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NativeName.html" data-type="entity-link" >NativeName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostalCode.html" data-type="entity-link" >PostalCode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Translation.html" data-type="entity-link" >Translation</a>
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