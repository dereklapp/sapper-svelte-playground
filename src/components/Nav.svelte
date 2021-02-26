<script>
  export const items = [
    { endpoint: "people", label: "People" },
    { endpoint: "films", label: "Films" },
    { endpoint: "starships", label: "Starships" },
    { endpoint: "vehicles", label: "Vehicles" },
    { endpoint: "species", label: "Species" },
    { endpoint: "planets", label: "Planets" },
  ]
  export let segment;

  // Default menu state
  export let openMenu = false;
  
  // Sets click event on hamburger to toggle menu visibility
  function toggleMenu() {
    openMenu = !openMenu;
  }

  // Sets click event on menu items to close menu visibility
  function closeMenu() {
    openMenu = false;
  }
</script>

<style>
  .navbar {
    background-color: #fff;
    height: 2.8125rem;
  }
  .navbar__wrapper {
    color: #fff;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.3125rem;
    padding-left: 1.3125rem;
  }
  @media only screen and (min-width: 48.875rem) {
    .navbar__wrapper {
      padding-right: 2.625rem;
      padding-left: 2.625rem;
    }
  }
  @media only screen and (min-width: 75rem) {
    .navbar__wrapper {
      padding-right: 5.25rem;
      padding-left: 5.25rem;
    }
  }
  @media only screen and (min-width: 87.5rem) {
    .navbar__wrapper {
      padding-right: 7.875rem;
      padding-left: 7.875rem;
    }
  }
  @media only screen and (min-width: 103.125rem) {
    .navbar__wrapper {
      padding-right: 10.5rem;
      padding-left: 10.5rem;
    }
  }
  .navbar__components {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
  }
  @media only screen and (max-width: 37.4375rem) {
    .navbar__components {
      margin-right: -0.65625rem;
      margin-left: -0.65625rem;
    }
  }
  .navbar__components__branding, .navbar__components__menu, .navbar__components__cta, .navbar__components__trigger {
    height: 100%;
    margin-right: 1.3125rem;
    margin-left: 1.3125rem;
    flex: 0 0 auto;
  }
  @media only screen and (max-width: 37.4375rem) {
    .navbar__components__branding, .navbar__components__menu, .navbar__components__cta, .navbar__components__trigger {
      margin-right: 0.65625rem;
      margin-left: 0.65625rem;
    }
  }
  .navbar__components__branding {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
  }
  .navbar__components__branding .custom-logo-link {
    display: block;
  }
  .navbar__components__branding .custom-logo-link .custom-logo {
    display: block;
    width: auto;
    height: 1.9375rem;
  }
  .navbar__components__menu {
    flex-grow: 1;
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu {
      transition: all 480ms cubic-bezier(0.7, 0, 0.3, 1);
      position: fixed;
      top: 0;
      right: 100%;
      bottom: 0;
      left: 0;
      margin-right: 0;
      margin-left: 0;
      height: auto;
      overflow: hidden;
      box-shadow: 0 1.3125rem 3.9375rem 0 rgba(29, 37, 44, 0.52);
    }
  }
  .navbar__components__menu.expanded {
    right: 4.03125rem;
  }
  @media only screen and (min-width: 48.875rem) and (max-width: 60rem) {
    .navbar__components__menu.expanded {
      right: 5.34375rem;
    }
  }
  .navbar__components__menu__nav {
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .navbar__components__menu__nav li {
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu__nav {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      transition: all 480ms cubic-bezier(0.7, 0, 0.3, 1);
      background-color: #fff;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item {
      position: relative;
      flex: 0 0 auto;
    }
  }
  .navbar__components__menu__nav .menu-item > a {
    height: 100%;
  }
  .navbar__components__menu__nav .menu-item a {
    position: relative;
    display: block;
    width: 100%;
    padding: 0.65625rem 1.3125rem;
    font-weight: 700;
    color: #50565c;
    text-decoration: none;
  }
  .navbar__components__menu__nav .menu-item a:hover, .navbar__components__menu__nav .menu-item a:active, .navbar__components__menu__nav .menu-item a:focus {
    color: #a79231;
  }
  .navbar__components__menu__nav .menu-item.menu-item-has-children > a {
    padding-right: 2.3125rem;
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.menu-item-has-children > a {
      padding-right: 1.65625rem;
    }
  }
  .navbar__components__menu__nav .menu-item.menu-item-has-children > a::after {
    transition: all 200ms ease-in-out;
    content: "";
    position: absolute;
    top: 50%;
    right: 1.3125rem;
    width: 1rem;
    height: 1rem;
    background-image: url(../img/icon--chevron--right.svg);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
    transform: translateY(-50%);
    filter: invert(35%) sepia(12%) saturate(338%) hue-rotate(169deg) brightness(88%) contrast(90%);
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.menu-item-has-children > a::after {
      right: 0.65625rem;
      width: 0.6875rem;
      height: 0.6875rem;
      background-image: url(../img/icon--chevron--down.svg);
      background-size: 100% auto;
    }
  }
  .navbar__components__menu__nav .menu-item .sub-menu {
    width: 0;
    height: 0;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    z-index: 6;
    margin: 0;
    padding: 0;
    list-style-type: none;
    transition: all 480ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .navbar__components__menu__nav .menu-item .sub-menu li {
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu__nav .menu-item .sub-menu {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 1.3125rem 3.9375rem 0 rgba(29, 37, 44, 0.52);
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item .sub-menu {
      position: absolute;
      width: 12.25rem;
      min-width: 12.25rem;
      box-shadow: -0.1875rem 0.1875rem 0.65625rem 0 rgba(209, 211, 213, 0.26);
      transition: all 120ms ease-in-out;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item .sub-menu .menu-item a {
      padding: 0.4375rem 1.3125rem;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item .sub-menu .menu-item.menu-item-has-children > a::after {
      right: 1.3125rem;
      background-image: url(../img/icon--chevron--right.svg);
      background-size: auto 100%;
    }
  }
  .navbar__components__menu__nav .menu-item .sub-menu .menu-item.view-all a {
    padding-top: 1.3125rem;
    font-weight: 400;
    font-size: 0.8125rem;
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu__nav .menu-item .sub-menu .menu-item.view-all a {
      padding-top: 1.96875rem;
    }
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu__nav .menu-item .sub-menu .menu-item.view-all a::before {
      content: "";
      position: absolute;
      top: 0.875rem;
      right: 1.3125rem;
      left: 1.3125rem;
      border-top: 0.0625rem dashed #e1e2e4;
    }
  }
  .navbar__components__menu__nav .menu-item__backdrop {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all 120ms ease-in-out;
    z-index: 5;
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item__backdrop {
      position: fixed;
      top: 2.8125rem;
    }
  }
  .navbar__components__menu__nav .menu-item.expanded > a {
    color: #a79231;
    text-decoration: none;
  }
  .navbar__components__menu__nav .menu-item.expanded > a:hover, .navbar__components__menu__nav .menu-item.expanded > a:active, .navbar__components__menu__nav .menu-item.expanded > a:focus {
    color: #a79231;
  }
  .navbar__components__menu__nav .menu-item.expanded > a::after {
    filter: invert(77%) sepia(52%) saturate(486%) hue-rotate(5deg) brightness(87%) contrast(87%);
  }
  .navbar__components__menu__nav .menu-item.expanded > .sub-menu {
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    overflow: visible;
    position: absolute;
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu {
      top: 0;
      right: 3.7275rem;
      bottom: 0;
      left: 0;
      background-color: #fff;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu {
      width: 12.25rem;
      background-color: #fff;
      top: 2.625rem;
      border-top: 0.1875rem solid #cab44b;
      padding-top: 0.65625rem;
      padding-bottom: 0.875rem;
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu::before {
      content: "";
      position: absolute;
      top: -0.5625rem;
      left: 0.9375rem;
      width: 0.75rem;
      height: 0.375rem;
      border-right: 0.5rem solid transparent;
      border-bottom: 0.5rem solid #cab44b;
      border-left: 0.5rem solid transparent;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item {
      position: static;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item__backdrop {
      display: none;
    }
  }
  .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item.expanded > .sub-menu {
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    overflow: visible;
    position: absolute;
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item.expanded > .sub-menu {
      top: 0;
      right: 2.625rem;
      bottom: 0;
      left: 0;
      background-color: #fff;
    }
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item.expanded > .sub-menu {
      width: 12.25rem;
      background-color: #fff;
      top: -0.1875rem;
      left: calc(100% - 0.25rem);
      bottom: 0;
      box-shadow: none;
    }
  }
  .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item.expanded > .sub-menu::before {
    border: none;
    width: 0.0625rem;
    height: auto;
    top: 1.09375rem;
    bottom: 1.09375rem;
    left: 0;
    border-left: 0.0625rem dashed #e1e2e4;
  }
  .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item.expanded .menu-item__backdrop {
    top: 0;
    right: -2.625rem;
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__menu__nav .menu-item.expanded > .sub-menu .menu-item.expanded .menu-item__backdrop {
      display: none;
    }
  }
  @media only screen and (max-width: 59.9375rem) {
    .navbar__components__cta {
      flex-grow: 1;
    }
  }
  .navbar__components__cta__nav {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.65625rem;
    margin-left: -0.65625rem;
    justify-content: flex-end;
    align-items: center;
  }
  .navbar__components__cta__nav li {
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 37.4375rem) {
    .navbar__components__cta__nav {
      margin-right: -0.328125rem;
      margin-left: -0.328125rem;
    }
  }
  .navbar__components__cta__nav .menu-item {
    height: 100%;
    margin-right: 0.65625rem;
    margin-left: 0.65625rem;
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 37.4375rem) {
    .navbar__components__cta__nav .menu-item {
      margin-right: 0.328125rem;
      margin-left: 0.328125rem;
    }
  }
  .navbar__components__cta__nav .menu-item > a {
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    position: relative;
    display: inline-block;
    height: 2rem;
    padding-right: 0.65625rem;
    padding-left: 0.65625rem;
    font-size: inherit;
    font-weight: 700;
    text-decoration: none;
    border-radius: 2.625rem;
    line-height: 1.75rem;
    box-shadow: 0 0.525rem 0.875rem 0 rgba(80, 86, 92, 0.13);
    border: 0.125rem solid #b9bcbf;
    background-color: #d1d3d5;
    box-shadow: none;
    position: static;
  }
  .navbar__components__cta__nav .menu-item.button--primary > a {
    background-color: #cab44b;
    border-color: #cab44b;
    color: #fff;
    text-decoration: none;
  }
  .navbar__components__cta__nav .menu-item.button--primary > a:hover, .navbar__components__cta__nav .menu-item.button--primary > a:active, .navbar__components__cta__nav .menu-item.button--primary > a:focus {
    background-color: #a79231;
    border-color: #a79231;
  }
  .navbar__components__cta__nav .menu-item.button--primary > a:hover, .navbar__components__cta__nav .menu-item.button--primary > a:active, .navbar__components__cta__nav .menu-item.button--primary > a:focus {
    color: #fff;
  }
  .navbar__components__cta__nav .menu-item.button--secondary > a {
    background-color: #0199d6;
    border-color: #0199d6;
    color: #fff;
    text-decoration: none;
  }
  .navbar__components__cta__nav .menu-item.button--secondary > a:hover, .navbar__components__cta__nav .menu-item.button--secondary > a:active, .navbar__components__cta__nav .menu-item.button--secondary > a:focus {
    background-color: #016d99;
    border-color: #016d99;
  }
  .navbar__components__cta__nav .menu-item.button--secondary > a:hover, .navbar__components__cta__nav .menu-item.button--secondary > a:active, .navbar__components__cta__nav .menu-item.button--secondary > a:focus {
    color: #fff;
  }
  .navbar__components__cta__nav .menu-item.button--tertiary > a {
    background-color: #e31d93;
    border-color: #e31d93;
    color: #fff;
    text-decoration: none;
  }
  .navbar__components__cta__nav .menu-item.button--tertiary > a:hover, .navbar__components__cta__nav .menu-item.button--tertiary > a:active, .navbar__components__cta__nav .menu-item.button--tertiary > a:focus {
    background-color: #ad1570;
    border-color: #ad1570;
  }
  .navbar__components__cta__nav .menu-item.button--tertiary > a:hover, .navbar__components__cta__nav .menu-item.button--tertiary > a:active, .navbar__components__cta__nav .menu-item.button--tertiary > a:focus {
    color: #fff;
  }
  .navbar__components__cta__nav .menu-item.button--transparent > a {
    background-color: transparent;
    border-color: transparent;
    padding-right: 0;
    padding-left: 0;
    color: #50565c;
    text-decoration: none;
  }
  .navbar__components__cta__nav .menu-item.button--transparent > a:hover, .navbar__components__cta__nav .menu-item.button--transparent > a:active, .navbar__components__cta__nav .menu-item.button--transparent > a:focus {
    background-color: transparent;
    border-color: transparent;
  }
  .navbar__components__cta__nav .menu-item.button--transparent > a:hover, .navbar__components__cta__nav .menu-item.button--transparent > a:active, .navbar__components__cta__nav .menu-item.button--transparent > a:focus {
    color: #a79231;
  }
  @media only screen and (min-width: 60rem) {
    .navbar__components__trigger {
      display: none;
    }
  }
  .navbar__components__trigger__button {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    width: 1.40625rem;
    height: 100%;
    padding: 0;
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    border: none;
    background-color: transparent;
    outline: none;
  }
  .navbar__components__trigger__button span {
    display: block;
    width: 1.09375rem;
    height: 0.125rem;
    position: relative;
    padding: 0;
    background-color: #50565c;
    transition: all 240ms ease-out;
  }
  .navbar__components__trigger__button span::before, .navbar__components__trigger__button span::after {
    content: "";
    width: 1.40625rem;
    height: 0.125rem;
    background-color: #50565c;
    position: absolute;
    right: -0.3125rem;
    left: 0;
    transition: all 240ms ease-out;
  }
  .navbar__components__trigger__button span::before {
    top: -0.3125rem;
  }
  .navbar__components__trigger__button span::after {
    bottom: -0.3125rem;
  }
  .navbar__components__trigger__button.expanded span {
    background-color: transparent;
  }
  .navbar__components__trigger__button.expanded span::before {
    top: 0;
    transform: rotate3d(0, 0, 1, -45deg);
  }
  .navbar__components__trigger__button.expanded span::after {
    top: 0;
    transform: rotate3d(0, 0, 1, 45deg);
  }
</style>

<header
  id="masthead"
  role="banner"
  class="navbar"
  >
  <div class="navbar__wrapper">
    <div class="navbar__components">

      <!-- Branding -->
      <div
        class="navbar__components__branding"
        href="http://localhost/initializer/"
        title="Initializer"
        aria-label="Logo"
        >
        <a
          class="custom-logo-link"
          href='.'
          >
          <img
            src="Impellent_Icon_PMS_Positive.svg"
            class="custom-logo"
            alt=""
            height="432"
            width="387.11"
            />
        </a>
      </div>

      <!-- Main Navigation -->
      <nav
        class="navbar__components__menu"
        class:expanded='{openMenu === true}'
        >
        <ul
          id="mastheadNav"
          class="navbar__components__menu__nav"
          >
          {#each items as item}
            <li
              class="menu-item"
              class:selected='{segment === undefined}'
            >
              <a
                rel=prefetch
                class:selected='{segment === item.endpoint}'
                href="{item.endpoint}"
                on:click={closeMenu}
                >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- CTA Navigation -->
      <nav class="navbar__components__cta">
        <ul
          id="menu-navbar-cta"
          class="navbar__components__cta__nav"
          >
          <li
            class="button--transparent menu-item"
            >
            <a href=".">
              Login
            </a>
          </li>
          <li class="button--primary menu-item">
            <a href=".">
              Signup
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Trigger -->
      <div class="navbar__components__trigger">
        <button
          type="button"
          id="mastheadTrigger"
          class="navbar__components__trigger__button"
          class:expanded='{openMenu === true}'
          title="Menu trigger"
          aria-label="Menu trigger"
          aria-controls="mastheadNav"
          aria-haspopup="true"
          aria-expanded="false"
          on:click={toggleMenu}
          >
          <span></span>
        </button>
      </div>

    </div>
  </div>
</header>
