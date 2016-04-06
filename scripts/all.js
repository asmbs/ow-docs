!function($) {

    /**
     * Code example manager.
     */
    $.exampler = {
        items: [],
    };

    /**
     * Item constructor.
     *
     * @param  {Element}  element
     */
    $.exampler.item = function(element) {
        // Set properties
        this.outer = $(element);
        this.inner = this.outer.find('.wrapper');
        this.toggle = this.outer.find('.toggle a');
        this.input = this.inner.find('.input');
        this.output = this.inner.find('.output');

        var self = this;

        // Dynamically set inner height
        $(window).load(function() {
            self.inner.height(Math.max(self.input.height(), self.output.height()));
        });

        // Bind toggle handler
        this.toggle.on('click.exampler', this, this.doToggle);

        // Activate
        this.showInput();
    };

    /**
     * Item prototype.
     */
    $.exampler.item.prototype = {

        active: null,

        outer: null,
        inner: null,
        toggle: null,
        input: null,
        output: null,

        doToggle: function(e) {
            e.preventDefault();
            var item = e.data;
            if (item.active == 'output') {
                item.showInput();
            } else if (item.active == 'input') {
                item.showOutput();
            } else {
                throw new Error(item.active +' is an invalid active state');
            }
        },

        showInput: function() {
            this.input.addClass('active');
            this.output.removeClass('active');
            this.setToggleText('Show Result');
            this.active = 'input';
        },

        showOutput: function() {
            this.input.removeClass('active');
            this.output.addClass('active');
            this.setToggleText('Show Input');
            this.active = 'output';
        },

        setToggleText: function(text) {
            this.toggle.text(text);
        }
    };

    // -----------------------------------------------------------------------------------------

    /**
     * Initialize the object.
     *
     * @param  {String|Element|object}  selector
     */
    $.exampler.init = function(selector) {
        var _exampler = this;
        $(selector).each(function() {
            var i = new _exampler.item(this);
            _exampler.items.push(i);
        });
    };

    $.exampler.init('.d-example');

}(jQuery);
