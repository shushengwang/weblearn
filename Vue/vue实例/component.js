Vue.component("my-component", {
    template: "<div> A custom component !</div>"
});

var child = {
    template: "<div> Child component !</div>"
};

new Vue({
    el: "#example",
    components: {
        "child-component": child
    }
});

Vue.component("simple-counter", {
    template: "<button v-on:click='count += 1'>{{ count }}</button>",
    data: function () {
        return {
            count: 0
        };
    }
});

new Vue({
    el: "#example-2"
});

Vue.component('children', {
    // 声明 props
    props: ['message'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{ message }}</span>'
});

new Vue({
    el: "#example-3"
});

Vue.component('child-prop', {
    // 在 JavaScript 中使用 camelCase
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
});

new Vue({
    el: "#example-prop",
    data: {
        parentMessage: ""
    }
});

Vue.component("button-counter", {
    template: "<button v-on:click='incrementCounter'>{{ counter }}</button>",
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit("increment");
        }
    }
});

new Vue({
    el: "#counter-example",
    data: {
        total: 0
    },
    methods: {
        incermentTotal: function () {
            this.total += 1;
        }
    }
});

Vue.component("button-message", {
    template: "<div><input type='text' v-model='message' /><button v-on:click='handleSendMessage'>Send</button></div>",
    data: function () {
        return {
            message: ""
        }
    },
    methods: {
        handleSendMessage: function () {
            this.$emit("sendmessage", { message: this.message });
            this.message = "";
        }
    }
});

var vm = new Vue({
    el: "#message-event-example",
    data: {
        messages: []
    },
    methods: {
        handleMessages: function (payload) {
            this.messages.push(payload.message)
        }
    }
});

Vue.component("currency-input", {
    template: "\
    <span>\
      $\
      <input\
        ref='input'\
        v-bind:value='value'\
        v-on:input='updateValue($event.target.value)'\
      >\
    </span>\
    ",
    props: ["value"],
    methods: {
        updateValue: function (value) {
            console.log("index == " + value.indexOf("."));
            var result = value.trim().slice(
                0,
                value.indexOf(".") === -1 ? value.length : value.indexOf(".") + 3
            );
            console.log("result == " + result);
            if (result !== value) {
                this.$refs.input.value = result;
            }
            this.$emit("input", Number(result))
        }
    }
});

new Vue({
    el: "#currency-input-example",
    data: {
        price: ""
    }
});


