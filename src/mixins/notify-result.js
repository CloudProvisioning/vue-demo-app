export const notifyResultMixin = {
    methods: {
        notifyResult: function (status, message, elapsed) {
            const h = this.$createElement;
            if (status === 'success') {
                this.$notify({
                title: status,
                message: h('i', { class: 'color-primary', style: 'font-weight: bold' }, message + ', elapsed time: ' + elapsed),
                duration: 0
                });
            }
            else if (status === 'failure') {
                this.$notify({
                title: status,
                message: h('i', { class: 'color-alert', style: 'font-weight: bold' }, message),
                duration: 0
                });
            } 
        }
    }
}