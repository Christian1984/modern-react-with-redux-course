import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    onInputChange = e => {
        this.setState({ searchTerm: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();

        if (this.props.submitHandler) {
            this.props.submitHandler(this.state.searchTerm);
        }
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label htmlFor="search">Search</label>
                        <input type="text" value={ this.state.searchTerm } onChange={ this.onInputChange } />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;