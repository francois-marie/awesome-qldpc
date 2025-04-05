.PHONY: all clean plots readme site serve setup

# Create necessary directories
DIRS = out/png out/pdf data assets/images _site

all: setup dirs plots site

setup:
	bundle update
	bundle install

dirs:
	mkdir -p $(DIRS)

plots:
	python src/plot_qldpc_codes.py
	cp out/png/qldpc_codes_plot.png assets/images/

site: plots
	JEKYLL_ENV=production bundle exec jekyll build

serve:
	bundle exec jekyll serve --livereload

clean:
	rm -rf out/png/* out/pdf/* _site .jekyll-cache