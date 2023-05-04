< !doctype html >
 <html>
    <head>
        <base href="/" />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            <title>PHASER GAME</title>
            <style>*{
    padding: 0;
    margin: 0;
}

    header {
        background - color: #fbbbd6;
    height: 80px;
    box-shadow: 0px 2px 4px #D9D9D9;
    margin-bottom: 20px;
    display: flex;
}

    .header-contents{
        display: flex;
    align-items: center;
    color: white;
    margin-left: 30px;
}

    .title{
        text - align:center;
}

    html, body {
        height: 100%;
}

    main{
        margin - top: 60px;
  }

    #game-app {
        height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#game-app > canvas {
        max - width: 100%;
    max-height: 100%;
}

    footer{
        margin - top: 30px;
    bottom:0;
    background-color: #fbbbd6;
    height: 50px;
    width:100%;
    box-shadow: 0px 2px 4px #D9D9D9;
    position:absolute;
}
</style>
<script defer="defer" src="/app.bundle.js"></script>
</head>
<body>
    <header>
        <div class="header-contents">
            <div class="title">
                <h2>おロマンティックマナー講座</h2>
                <p>feat. 2.5次元俳優</p>
            </div>
        </div>
    </header>
    <main>
        <div id="game-app"></div>
    </main>
    <footer>
    </footer>
    </body>
    </html>