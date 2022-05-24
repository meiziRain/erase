const host = window.location.host

let upName = ['暴躁的仙人JUMP', '郭云神奇', 'TOM表哥', 'vivi可爱多', '努力的Lorre', '央视新闻', '圆脸颖入职记', '智能路障', '硬核的半佛仙人', '侯翠翠', '央视网快看', '梗指南', '观察者网', '马督公', '路温1900', '一棵菠萝的啵']

let videoNameExp = []
if (host === 'www.bilibili.com') {
    const resizeObserver = new ResizeObserver(() =>
        erase()
    )
    resizeObserver.observe(document.querySelector('.popular-list'));
}

function erase() {
    const eraseList = Array.from(document.querySelectorAll('.video-card'))
    eraseList.find(it => {
        const upNameSpan = it.querySelector('.up-name__text')
        const matchVideoTitle = videoNameExp.find((nameExp) => it.querySelector('.video-name').innerText.includes(nameExp))
        if (upName.includes(upNameSpan.innerText) || matchVideoTitle) {
            console.log(it)
            it.remove()
        }
    })
}
