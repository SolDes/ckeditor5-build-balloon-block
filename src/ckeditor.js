/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
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
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@soldes/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase { }

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Alignment,
	Autoformat,
	BlockToolbar,
	Bold,
	Italic,
	Underline,
	Code,
	Heading,
	Indent,
	IndentBlock,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar
];

BalloonEditor.plugins = [];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'heading',
		'bold',
		'italic',
		'underline',
		'link',
		'code',
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
			'bold',
			'italic',
			'underline',
			'link',
			'code',
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
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	mediaEmbed: {
		previewsInData: true
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
