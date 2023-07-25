function toast({ title = '', message = '', type = 'success', duration = 3000 }) {
    const toastContain = document.getElementById("toast");
    const iconType = {
        success: 'fa fa-check-circle',
        info: 'fa fa-info-circle',
        warning: 'fa fa-exclamation-circle',
        error: 'fa fa-exclamation-circle',
    }
    if (toastContain) {
        const toast = document.createElement('div');
        const typeText = `toast--${type}`
        toast.classList.add('toast', typeText);
        toast.style.animation = `slideIn ease .3s forwards, fadeOut ease 1s ${(duration/3).toFixed(2)}s forwards`
        toast.innerHTML =
            `
            <div class="toast__icon">
                <i class="${iconType[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">
                ${title}
                </h3>
                <p class="toast__message">
                ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa fa-times"></i>
            </div>
        </div>
        `
        toastContain.appendChild(toast);

        const closeToast = setTimeout(() => {
            toastContain.removeChild(toast)
        }, duration + 1000)

        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                toastContain.removeChild(toast);
                clearTimeout(closeToast);
            }
        }
    }
}

var btnAdd = document.getElementById('btn-add1');
btnAdd.onclick = function() {
    toast({ title: 'success', message: 'this is success', type: 'success', duration: 3000 });
};
var btnAdd = document.getElementById('btn-add2');
btnAdd.onclick = function() {
    toast({ title: 'success', message: 'this is success', type: 'info', duration: 2000 });
};
var btnAdd = document.getElementById('btn-add3');
btnAdd.onclick = function() {
    toast({ title: 'success', message: 'this is success', type: 'warning', duration: 4000 });
};
var btnAdd = document.getElementById('btn-add4');
btnAdd.onclick = function() {
    toast({ title: 'success', message: 'this is success', type: 'error', duration: 1000 });
};