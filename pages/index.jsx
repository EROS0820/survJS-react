var React = require('react');

var Index = React.createClass({
    displayName: 'Index',

    render: function() {
        return (
            <div className='frontpage'>
                <div className='front__heading' style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/images/front.jpg)',
                    backgroundPosition: 'top center',
                    width: '100%',
                    flexDirection: 'row',
                    paddingTop: '10vh',
                    paddingBottom: '2vh',
                }}>
                    <div className='front-cover-wrapper'>
                        <img className='front-cover' src='images/title_page_small.jpg' />
                    </div>
                    <div className='front-text-wrapper'>
                        <h3 className='front-header'>SurviveJS - Webpack and React</h3>
                        <h1 className='front-motto'>Go from zero to Webpack and React hero</h1>
                    </div>
                </div>
                <div className='post post--front'>
                    <div className='post__content' dangerouslySetInnerHTML={{__html: require('./index.md').content}} />
                </div>
            </div>
        );
    }
});

module.exports = Index;

