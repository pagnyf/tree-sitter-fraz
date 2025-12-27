import XCTest
import SwiftTreeSitter
import TreeSitterFraz

final class TreeSitterFrazTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fraz())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Fraz grammar")
    }
}
