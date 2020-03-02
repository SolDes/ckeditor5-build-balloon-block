/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import FontColor from '@ckeditor/ckeditor5-font/src/FontColor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/FontBackgroundColor';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@soldes/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase { }

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Alignment,
	Autoformat,
	BlockToolbar,
	FontColor,
	FontBackgroundColor,
	Bold,
	Italic,
	Underline,
	CodeBlock,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties
];

BalloonEditor.plugins = [];

const customColorPalette = [
	{
		color: '#444443',
		label: 'Black'
	},
	{
		color: '#0070d2',
		label: 'Blue'
	},
	{
		color: '#002D66',
		label: 'Navy Blue'
	},
	{
		color: '#4bca81',
		label: 'Green'
	},
	{
		color: '#ffb75d',
		label: 'Orange'
	},
	{
		color: '#713b8c',
		label: 'Purple'
	}
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'removeFormat',
		'heading',
		'fontColor',
		'fontBackgroundColor',
		'bold',
		'italic',
		'underline',
		'link',
		'codeBlock',
		'alignment',
		'|',
		'bulletedList',
		'numberedList',
		'indent',
		'outdent',
		'|',
		'imageUpload',
		'mediaEmbed',
		'insertTable',
		'|',
		'undo',
		'redo'
	],
	toolbar: {
		items: [
			'removeFormat',
			'fontColor',
			'fontBackgroundColor',
			'bold',
			'italic',
			'underline',
			'link',
			'codeBlock',
			'|',
			'alignment:left',
			'alignment:center',
			'alignment:right',
			'alignment:justify',
			'|',
			'indent',
			'outdent'
		]
	},
	codeBlock: {
		languages: [
			{ language: 'plaintext', label: 'Plain text' }, // The default language.
			{ language: 'ampscript-ssjs', label: 'AMPScript and SSJS' },
			{ language: 'c', label: 'C' },
			{ language: 'cs', label: 'C#' },
			{ language: 'cpp', label: 'C++' },
			{ language: 'css', label: 'CSS' },
			{ language: 'diff', label: 'Diff' },
			{ language: 'xml', label: 'HTML/XML' },
			{ language: 'java', label: 'Java' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'php', label: 'PHP' },
			{ language: 'python', label: 'Python' },
			{ language: 'ruby', label: 'Ruby' },
			{ language: 'tampermonkey', label: 'Tampermonkey' },
			{ language: 'typescript', label: 'TypeScript' }
		]
	},
	fontColor: {
		colors: customColorPalette
	},
	fontBackgroundColor: {
		colors: customColorPalette
	},
	heading: {
		options: [
			{
				model: 'sldsHeadingLarge',
				view: {
					name: 'div',
					classes: 'slds-text-heading_large'
				},
				title: 'Heading Large',
				class: 'ck-heading_slds-text-heading-large',
				converterPriority: 'high'
			},
			{
				model: 'sldsHeadingMedium',
				view: {
					name: 'div',
					classes: 'slds-text-heading_medium'
				},
				title: 'Heading Medium',
				class: 'ck-heading_slds-text-heading-medium',
				converterPriority: 'high'
			},
			{
				model: 'sldsHeadingSmall',
				view: {
					name: 'div',
					classes: 'slds-text-heading_small'
				},
				title: 'Heading Small',
				class: 'ck-heading_slds-text-heading-small',
				converterPriority: 'high'
			},
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'sldsTextBodySmall',
				view: {
					name: 'p',
					classes: 'slds-text-body_small'
				},
				title: 'Paragraph Small',
				class: 'ck-heading_slds-text-body-small',
				converterPriority: 'high'
			}
		]
	},
	image: {
		toolbar: [
			'imageTextAlternative',
			'|',
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight'
		],
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		]
	},
	mediaEmbed: {
		previewsInData: true
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		],
		// Set the palettes for tables.
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		},

		// Set the palettes for table cells.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
