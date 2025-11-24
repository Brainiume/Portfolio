
class NavigationBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>The Marlon Files</h1>
                <div id="navigationButtons">
                <button class="btn" onclick="window.location.href = 'index.html'"><i class="icon-house"></i> Home</button>
                    <button class="btn" onclick="window.location.href = 'HTML_Games.html'"><i class="icon-gamepad-2"></i> HTML Games</button>
                    <button class="btn" onclick="window.location.href = 'Game1.html'"><i class="icon-gamepad-2"></i> Games #1</button>
                    <button class="btn" onclick="window.location.href = 'Game2.html'"><i class="icon-gamepad-2"></i> Games #2</button>
                    <button class="btn" onclick="window.location.href = 'Game3.html'"><i class="icon-gamepad-2"></i> Games #3</button>

                </div>
            <p>Brvoo this is headfer!</p>
        </header>
        `
    }
}

class FooterBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
         <p>Footer!</p>
        </footer>
        `
    }
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="opener">
            <form action="https://api.web3forms.com/submit" method="POST" id="VisitorForm">
                <input type="hidden" name="access_key" value="ad52f1a9-56a2-4874-924a-17666b1e9bbb">
                <label for=""> Name <input type="text" id="visitorName" name="Visitor's Name"> </label>
                <label for=""> Company <input type="text" id="visitorCompany" name="Visitor's Company"> </label>
                <input class="btnLong" type="submit" value = "Submit Details" id="SubmitVisitor">
                <input class="btnLong" type="button" value = "Abstain for now" id="SubmitAnon">
            </form>
        </div>
        `
    }
}



customElements.define('footer-bar', FooterBar)
customElements.define('my-opener', MyOpener)
customElements.define('navigation-bar', NavigationBar)
