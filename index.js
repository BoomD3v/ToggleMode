const { Plugin } = require('powercord/entities');
const { Tooltip } = require('powercord/components');
const { inject, uninject } = require('powercord/injector');
const { React, getModule, getModuleByDisplayName } = require('powercord/webpack');

const ToggleButton = require('./components/icons/NotebookButton')

module.exports = class ToggleMode extends Plugin {
    async startPlugin() {
        this._injectHeaderBarContainer();

        this.loadStylesheet('styles.scss');
    }

    async _injectHeaderBarContainer() {
        const HeaderBarContainer = await getModuleByDisplayName('HeaderBarContainer');
        const classes = await getModule(['iconWrapper', 'clickable']);

        inject('toggle-header-bar', HeaderBarContainer.prototype, 'render', (args, res) => {
            res.props.toolbar.props.children.push(
                React.createElement(Tooltip, {
                    text: 'Toggle', position: 'bottom'
                }), React.createElement('div', {
                    className: `note-button ${classes.iconWrapper} ${classes.clickable}`
                }), React.createElement(ToggleButton, {
                    className: `note-button ${classes.icon}`,
                    onClick: () => {
                        return;
                    }
                })
            );
        });
    }
}