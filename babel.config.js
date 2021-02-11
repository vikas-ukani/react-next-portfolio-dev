module.exports = {
    presets: ["next/babel"],
    plugins: [["transform-define", {
        'process.env.LINK': process.env.NODE_ENV === 'production' ? '/react-next-portfolio-dev' : ''
    }]]
};
