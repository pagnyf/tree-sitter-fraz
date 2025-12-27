package tree_sitter_fraz_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fraz "github.com/pagnyf/fraz.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fraz.Language())
	if language == nil {
		t.Errorf("Error loading Fraz grammar")
	}
}
