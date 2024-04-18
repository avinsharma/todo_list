module.exports = {
    // other webpack configuration settings...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            // Add other rules for processing other file types if needed
        ],
    },
};