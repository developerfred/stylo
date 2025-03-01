// Copyright 2015-2020 Parity Technologies (UK) Ltd.
// Modifications Copyright (c) 2021 Thibaut Sardan

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { StyleSheet } from 'react-native';

import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
	a_button: {
		color: colors.background.app,
		fontFamily: fonts.robotoMonoMedium,
		fontSize: 20
	},
	a_text: {
		color: colors.text.main,
		fontFamily: fonts.robotoMono,
		fontSize: 12,
		letterSpacing: 0.4
	},
	h1: {
		color: colors.text.main,
		fontFamily: fonts.robotoBold,
		fontSize: 22
	},
	h2: {
		color: colors.text.main,
		fontFamily: fonts.robotoMedium,
		fontSize: 18
	},
	h_subheading: {
		color: colors.text.main,
		fontFamily: fonts.roboto,
		fontSize: 14,
		textTransform: 'uppercase'
	},
	i_large: { fontSize: 22 },
	i_medium: { fontSize: 18 },
	i_small: { fontSize: 10 },
	quote: {
		color: colors.text.main,
		fontFamily: fonts.robotoLight,
		fontSize: 28
	},
	t_big: {
		color: colors.text.main,
		fontFamily: fonts.roboto,
		fontSize: 16
	},
	t_code: {
		color: colors.text.main,
		fontFamily: fonts.robotoMono,
		fontSize: 15
	},
	t_codeS: {
		color: colors.text.main,
		fontFamily: fonts.robotoMono,
		fontSize: 11,
		letterSpacing: 0.2
	},
	t_important: {
		color: colors.text.main,
		fontFamily: fonts.robotoBold,
		fontSize: 13
	},
	t_label: {
		backgroundColor: colors.signal.main,
		color: colors.signal.main,
		fontFamily: fonts.robotoMedium,
		fontSize: 13
	},
	t_prefix: {
		color: colors.text.main,
		fontFamily: fonts.roboto,
		fontSize: 14,
		textTransform: 'uppercase'
	},
	t_regular: {
		color: colors.text.main,
		fontFamily: fonts.roboto,
		fontSize: 12
	},
	t_seed: {
		borderColor: colors.background.card,
		borderWidth: 0.8,
		color: colors.signal.main,
		fontFamily: fonts.light,
		fontSize: 18,
		letterSpacing: 0.7,
		lineHeight: 23,
		minHeight: 100,
		paddingHorizontal: 16,
		paddingVertical: 10
	}
});
