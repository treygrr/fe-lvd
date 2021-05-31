export function CHANGE_PAGE (context, param) {
    if (this.$router.history.current.path === param.path) return;
    const pushPath = param.path;
    this.commit('transition/startTransition')
    setTimeout(() => {
        this.commit('transition/stopTransition')
        if (this.$router.history.current.path === param.path) return;
        this.$router.push({ path: pushPath })
    }, 1000);
}
