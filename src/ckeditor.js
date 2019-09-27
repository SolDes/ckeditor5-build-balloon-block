/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase { }

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	// UploadAdapter,
	Autoformat,
	BlockToolbar,
	Bold,
	Italic,
	Underline,
	Code,
	// BlockQuote,
	// CKFinder,
	// EasyImage,
	Heading,
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

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'heading',
		'bold',
		'italic',
		'underline',
		'code',
		'|',
		'bulletedList',
		'numberedList',
		'|',
		'ImageUpload',
		'MediaEmbed',
		'|',
		'InsertTable',
		'|',
		'Undo',
		'Redo'
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'link',
			'Code'
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
				title: 'SLDS Heading Large',
				class: 'ck-heading_slds-text-heading-large',
				converterPriority: 'high'
			},
			{
				model: 'sldsHeadingMedium',
				view: {
					name: 'div',
					classes: 'slds-text-heading_medium'
				},
				title: 'SLDS Heading Medium',
				class: 'ck-heading_slds-text-heading-medium',
				converterPriority: 'high'
			},
			{
				model: 'sldsHeadingSmall',
				view: {
					name: 'div',
					classes: 'slds-text-heading_small'
				},
				title: 'SLDS Heading Small',
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
				title: 'SLDS Text Body Small',
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
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
