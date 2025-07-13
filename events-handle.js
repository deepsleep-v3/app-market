function mc_server_op_link(){
    window.location.href = "https://deepsleep-v3.github.io/app-market/minecraft-server-op.html";
}

function comingSoon_backToPrevinosPage(){
    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = 'https://deepsleep-v3.github.io/app-market/';
    }
}