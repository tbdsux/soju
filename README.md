# soju
Simple, Minimal Landing Page with TailwindCSS.

It was meant to be for general-purpose but then, the font made it look like a website for a **`code package`**.

### Info:
Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "soju-jekyll"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: soju-jekyll
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install soju-jekyll

### TailwindCSS
Install `node` packages:

    $ yarn install

Create Development CSS:

    $ yarn dev

Build CSS for Production:

    $ yarn build



## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `soju.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

