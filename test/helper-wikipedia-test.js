/* eslint-env mocha */
import expect from 'expect';
import Helper from '../lib/utils/helper-wikipedia.js';

describe('HelperWikipedia', () => {
  describe('pageName', () => {
    it('should return the name from the url', () => {
      // Given
      let input = 'http://www.foo.com/Magneto';

      // When
      let actual = Helper.pageName(input);

      // Then
      expect(actual).toEqual('Magneto');
    });
  });
  describe('readablePageName', () => {
    it('should remove all underscores', () => {
      // Given
      let input = 'Adrienne_Frost';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Adrienne Frost');
    });

    it('should convert quotes', () => {
      // Given
      let input = 'Eric O%27Grady';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual("Eric O'Grady");
    });

    it('should remove any mention of (comics)', () => {
      // Given
      let input = 'Hellfire_Club_(comics)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Hellfire Club');
    });

    it('should remove any mention of (artist)', () => {
      // Given
      let input = 'Jeff_Johnson_(artist)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Jeff Johnson');
    });

    it('should remove any mention of (writer)', () => {
      // Given
      let input = 'John_Francis_Moore_(writer)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('John Francis Moore');
    });

    it('should remove any mention of (character)', () => {
      // Given
      let input = 'Wolverine_(character)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Wolverine');
    });

    it('should remove any mention of (Marvel_Comics)', () => {
      // Given
      let input = 'Mutant_(Marvel_Comics)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Mutant');
    });

    it('should remove any mention of (Malibu_Comics)', () => {
      // Given
      let input = 'Exiles_(Malibu_Comics)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Exiles');
    });

    it('should keep the secret identity in parenthesis', () => {
      // Given
      let input = 'Black_Widow_(Yelena_Belova)';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual('Black Widow (Yelena Belova)');
    });

    it('should exclude the list of Marvel characters', () => {
      // Given
      let input = 'List_of_Marvel_Comics_characters:_K';

      // When
      let actual = Helper.readablePageName(input);

      // Then
      expect(actual).toEqual(null);
    });
  });
});
